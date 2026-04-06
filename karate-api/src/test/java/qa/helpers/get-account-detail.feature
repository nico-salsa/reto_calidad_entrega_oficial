Feature: Get account detail helper

Scenario:
  * def email = __arg.email
  Given url baseUrl
  And path 'getUserDetailByEmail'
  And param email = email
  When method get
  Then status 200
