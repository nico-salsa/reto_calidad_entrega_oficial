function metricValue(data, metricName, statName) {
  const metric = data.metrics[metricName];
  if (!metric) {
    return null;
  }
  if (metric.values && metric.values[statName] !== undefined) {
    return metric.values[statName];
  }
  if (metric[statName] !== undefined) {
    return metric[statName];
  }
  if (metric.value !== undefined) {
    return metric.value;
  }
  return null;
}

function roundNumber(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }
  return Number(value.toFixed(2));
}

function toPercent(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }
  return roundNumber(value * 100);
}

function formatValue(value, suffix = '') {
  if (value === null || value === undefined) {
    return 'n/a';
  }
  return `${value}${suffix}`;
}

function extractThresholds(data) {
  const thresholds = {};
  for (const metricName of Object.keys(data.metrics)) {
    const metric = data.metrics[metricName];
    if (!metric.thresholds) {
      continue;
    }
    thresholds[metricName] = {};
    for (const thresholdName of Object.keys(metric.thresholds)) {
      const threshold = metric.thresholds[thresholdName];
      thresholds[metricName][thresholdName] = typeof threshold === 'object' ? Boolean(threshold.ok) : Boolean(threshold);
    }
  }
  return thresholds;
}

function summaryModel(data, profileName) {
  return {
    profile: profileName,
    generatedAt: new Date().toISOString(),
    metrics: {
      httpReqs: metricValue(data, 'http_reqs', 'count'),
      iterations: metricValue(data, 'iterations', 'count'),
      checksRatePercent: toPercent(metricValue(data, 'checks', 'rate')),
      httpReqFailedRatePercent: toPercent(metricValue(data, 'http_req_failed', 'rate')),
      httpReqDurationMs: {
        avg: roundNumber(metricValue(data, 'http_req_duration', 'avg')),
        p90: roundNumber(metricValue(data, 'http_req_duration', 'p(90)')),
        p95: roundNumber(metricValue(data, 'http_req_duration', 'p(95)')),
        max: roundNumber(metricValue(data, 'http_req_duration', 'max')),
      },
      dataReceivedBytes: metricValue(data, 'data_received', 'count'),
      dataSentBytes: metricValue(data, 'data_sent', 'count'),
      vusMax: metricValue(data, 'vus_max', 'value'),
    },
    thresholds: extractThresholds(data),
  };
}

function renderThresholdLines(thresholds) {
  const lines = [];
  for (const metricName of Object.keys(thresholds)) {
    for (const thresholdName of Object.keys(thresholds[metricName])) {
      const status = thresholds[metricName][thresholdName] ? 'PASS' : 'FAIL';
      lines.push(`- ${metricName} :: ${thresholdName} => ${status}`);
    }
  }
  return lines.length ? lines.join('\n') : '- n/a';
}

function renderText(summary) {
  return [
    `Profile: ${summary.profile}`,
    `Generated at: ${summary.generatedAt}`,
    `HTTP requests: ${formatValue(summary.metrics.httpReqs)}`,
    `Iterations: ${formatValue(summary.metrics.iterations)}`,
    `Checks rate: ${formatValue(summary.metrics.checksRatePercent, '%')}`,
    `HTTP failed rate: ${formatValue(summary.metrics.httpReqFailedRatePercent, '%')}`,
    `Latency avg: ${formatValue(summary.metrics.httpReqDurationMs.avg, ' ms')}`,
    `Latency p90: ${formatValue(summary.metrics.httpReqDurationMs.p90, ' ms')}`,
    `Latency p95: ${formatValue(summary.metrics.httpReqDurationMs.p95, ' ms')}`,
    `Latency max: ${formatValue(summary.metrics.httpReqDurationMs.max, ' ms')}`,
    `VUs max: ${formatValue(summary.metrics.vusMax)}`,
    `Thresholds:`,
    renderThresholdLines(summary.thresholds),
    '',
  ].join('\n');
}

function renderMarkdown(summary) {
  return [
    `# k6 Summary - ${summary.profile}`,
    '',
    `Generated at: ${summary.generatedAt}`,
    '',
    '| Metric | Value |',
    '| --- | --- |',
    `| HTTP requests | ${formatValue(summary.metrics.httpReqs)} |`,
    `| Iterations | ${formatValue(summary.metrics.iterations)} |`,
    `| Checks rate | ${formatValue(summary.metrics.checksRatePercent, '%')} |`,
    `| HTTP failed rate | ${formatValue(summary.metrics.httpReqFailedRatePercent, '%')} |`,
    `| Latency avg | ${formatValue(summary.metrics.httpReqDurationMs.avg, ' ms')} |`,
    `| Latency p90 | ${formatValue(summary.metrics.httpReqDurationMs.p90, ' ms')} |`,
    `| Latency p95 | ${formatValue(summary.metrics.httpReqDurationMs.p95, ' ms')} |`,
    `| Latency max | ${formatValue(summary.metrics.httpReqDurationMs.max, ' ms')} |`,
    `| VUs max | ${formatValue(summary.metrics.vusMax)} |`,
    '',
    '## Thresholds',
    '',
    renderThresholdLines(summary.thresholds),
    '',
  ].join('\n');
}

export function buildSummary(data, profileName) {
  const summary = summaryModel(data, profileName);
  return {
    stdout: renderText(summary),
    [`results/${profileName}-summary.json`]: JSON.stringify(summary, null, 2),
    [`results/${profileName}-summary.md`]: renderMarkdown(summary),
  };
}
