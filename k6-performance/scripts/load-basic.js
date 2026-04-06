import { sleep } from 'k6';

import { getBrands, getProducts, searchProducts } from '../lib/api.js';
import { buildThresholds, defaultSearchTerm, pauseSeconds } from '../lib/config.js';
import { buildSummary } from '../lib/summary.js';
import { checkBrandsResponse, checkProductsResponse, checkSearchResponse } from '../lib/validators.js';

export const options = {
  scenarios: {
    catalog_readers: {
      executor: 'constant-vus',
      exec: 'catalogReaders',
      vus: Number(__ENV.LOAD_VUS || 2),
      duration: __ENV.LOAD_DURATION || '12s',
      gracefulStop: __ENV.LOAD_GRACEFUL_STOP || '10s',
    },
    search_readers: {
      executor: 'per-vu-iterations',
      exec: 'searchReaders',
      vus: Number(__ENV.SEARCH_VUS || 1),
      iterations: Number(__ENV.SEARCH_ITERATIONS || 6),
      maxDuration: __ENV.SEARCH_MAX_DURATION || '30s',
      gracefulStop: '5s',
    },
  },
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'max'],
  thresholds: buildThresholds(Number(__ENV.LOAD_P95_LIMIT_MS || 3000)),
  userAgent: 'qa-performance-k6/1.0',
};

export function catalogReaders() {
  checkProductsResponse(getProducts());
  sleep(pauseSeconds);
  checkBrandsResponse(getBrands());
  sleep(pauseSeconds);
}

export function searchReaders() {
  checkSearchResponse(searchProducts(defaultSearchTerm), defaultSearchTerm);
  sleep(pauseSeconds);
}

export function handleSummary(data) {
  return buildSummary(data, 'load-basic');
}
