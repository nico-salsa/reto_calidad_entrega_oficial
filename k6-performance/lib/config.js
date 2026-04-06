export const baseUrl = __ENV.K6_BASE_URL || 'https://automationexercise.com/api';
export const requestTimeout = __ENV.K6_TIMEOUT || '30s';
export const pauseSeconds = Number(__ENV.PAUSE_SECONDS || 1);
export const defaultSearchTerm = __ENV.SEARCH_TERM || 'top';

export function buildThresholds(p95LimitMs) {
  return {
    checks: ['rate>0.99'],
    http_req_failed: ['rate<0.01'],
    http_req_duration: [`p(95)<${p95LimitMs}`],
  };
}
