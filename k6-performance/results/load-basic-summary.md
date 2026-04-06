# k6 Summary - load-basic

Generated at: 2026-04-06T09:46:22.635Z

| Metric | Value |
| --- | --- |
| HTTP requests | 26 |
| Iterations | 16 |
| Checks rate | 100% |
| HTTP failed rate | 0% |
| Latency avg | 436.47 ms |
| Latency p90 | 734.84 ms |
| Latency p95 | 782.88 ms |
| Latency max | 796.66 ms |
| VUs max | 3 |

## Thresholds

- checks :: rate>0.99 => PASS
- http_req_failed :: rate<0.01 => PASS
- http_req_duration :: p(95)<3000 => PASS
