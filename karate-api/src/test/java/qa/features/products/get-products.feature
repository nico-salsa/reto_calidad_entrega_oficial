@get @smoke
Feature: Products catalog

Scenario: GET productsList returns catalog data with category metadata
  Given url baseUrl
  And path 'productsList'
  When method get
  Then status 200
  And match response.responseCode == 200
  * assert response.products.length > 0
  * match each response.products contains { id: '#number', name: '#string', price: '#string', brand: '#string', category: { usertype: { usertype: '#string' }, category: '#string' } }
  * match each response.products[*].price == '#regex ^Rs\\. \\d+'
  * def brands = get response.products[*].brand
  * def categories = get response.products[*].category.category
  * def userTypes = get response.products[*].category.usertype.usertype
  * match brands contains 'Polo'
  * match categories contains 'Tops'
  * match userTypes contains 'Women'
