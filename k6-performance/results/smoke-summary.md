# k6 Summary - smoke

Generated at: 2026-04-06T09:45:16.458Z

| Metric | Value |
| --- | --- |
| HTTP requests | 6 |
| Iterations | 2 |
| Checks rate | 100% |
| HTTP failed rate | 0% |
| Latency avg | 364.96 ms |
| Latency p90 | 684.2 ms |
| Latency p95 | 831.23 ms |
| Latency max | 978.26 ms |
| VUs max | 1 |

## Thresholds

- http_req_failed :: rate<0.01 => PASS
- checks :: rate>0.99 => PASS
- http_req_duration :: p(95)<2500 => PASS
