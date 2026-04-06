import http from 'k6/http';

import { baseUrl, requestTimeout } from './config.js';

function requestParams(name, endpoint, method) {
  return {
    timeout: requestTimeout,
    headers: {
      Accept: 'application/json',
    },
    tags: {
      name,
      endpoint,
      method,
    },
  };
}

export function getProducts() {
  return http.get(`${baseUrl}/productsList`, requestParams('GET productsList', 'productsList', 'GET'));
}

export function getBrands() {
  return http.get(`${baseUrl}/brandsList`, requestParams('GET brandsList', 'brandsList', 'GET'));
}

export function searchProducts(searchTerm) {
  return http.post(
    `${baseUrl}/searchProduct`,
    { search_product: searchTerm },
    requestParams('POST searchProduct', 'searchProduct', 'POST'),
  );
}
