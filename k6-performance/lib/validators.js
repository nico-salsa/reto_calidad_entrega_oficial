import { check } from 'k6';

function parseBody(response) {
  try {
    return response.json();
  } catch (error) {
    return null;
  }
}

export function checkProductsResponse(response) {
  const body = parseBody(response);
  return check(
    { response, body },
    {
      'productsList http status is 200': (value) => value.response.status === 200,
      'productsList responseCode is 200': (value) => value.body !== null && value.body.responseCode === 200,
      'productsList returns at least one product': (value) => value.body !== null && Array.isArray(value.body.products) && value.body.products.length > 0,
      'productsList first product has category metadata': (value) =>
        value.body !== null &&
        typeof value.body.products?.[0]?.brand === 'string' &&
        typeof value.body.products?.[0]?.category?.category === 'string' &&
        typeof value.body.products?.[0]?.category?.usertype?.usertype === 'string',
    },
  );
}

export function checkBrandsResponse(response) {
  const body = parseBody(response);
  return check(
    { response, body },
    {
      'brandsList http status is 200': (value) => value.response.status === 200,
      'brandsList responseCode is 200': (value) => value.body !== null && value.body.responseCode === 200,
      'brandsList returns at least one brand': (value) => value.body !== null && Array.isArray(value.body.brands) && value.body.brands.length > 0,
      'brandsList first brand has id and name': (value) =>
        value.body !== null &&
        typeof value.body.brands?.[0]?.id === 'number' &&
        typeof value.body.brands?.[0]?.brand === 'string',
    },
  );
}

export function checkSearchResponse(response, searchTerm) {
  const body = parseBody(response);
  const normalizedSearchTerm = String(searchTerm || '').toLowerCase();
  return check(
    { response, body, normalizedSearchTerm },
    {
      'searchProduct http status is 200': (value) => value.response.status === 200,
      'searchProduct responseCode is 200': (value) => value.body !== null && value.body.responseCode === 200,
      'searchProduct returns at least one product': (value) => value.body !== null && Array.isArray(value.body.products) && value.body.products.length > 0,
      'searchProduct results preserve product structure': (value) =>
        value.body !== null &&
        typeof value.body.products?.[0]?.name === 'string' &&
        typeof value.body.products?.[0]?.brand === 'string' &&
        typeof value.body.products?.[0]?.category?.category === 'string',
      'searchProduct returns results aligned with the search term': (value) =>
        value.body !== null &&
        value.body.products.some((product) =>
          String(product.name || '').toLowerCase().includes(value.normalizedSearchTerm) ||
          String(product.category?.category || '').toLowerCase().includes(value.normalizedSearchTerm),
        ),
    },
  );
}
