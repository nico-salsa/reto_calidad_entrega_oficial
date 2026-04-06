import { sleep } from 'k6';

import { getBrands, getProducts, searchProducts } from '../lib/api.js';
import { buildThresholds, defaultSearchTerm, pauseSeconds } from '../lib/config.js';
import { buildSummary } from '../lib/summary.js';
import { checkBrandsResponse, checkProductsResponse, checkSearchResponse } from '../lib/validators.js';

export const options = {
  vus: Number(__ENV.SMOKE_VUS || 1),
  iterations: Number(__ENV.SMOKE_ITERATIONS || 2),
  summaryTrendStats: ['avg', 'min', 'med', 'p(90)', 'p(95)', 'max'],
  thresholds: buildThresholds(Number(__ENV.SMOKE_P95_LIMIT_MS || 2500)),
  userAgent: 'qa-performance-k6/1.0',
};

export default function () {
  checkProductsResponse(getProducts());
  sleep(pauseSeconds);
  checkBrandsResponse(getBrands());
  sleep(pauseSeconds);
  checkSearchResponse(searchProducts(defaultSearchTerm), defaultSearchTerm);
  sleep(pauseSeconds);
}

export function handleSummary(data) {
  return buildSummary(data, 'smoke');
}
