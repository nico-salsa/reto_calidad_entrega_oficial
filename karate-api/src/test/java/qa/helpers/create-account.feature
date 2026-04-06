Feature: Create account helper

Scenario:
  * def account = __arg
  Given url baseUrl
  And path 'createAccount'
  And header Content-Type = 'application/x-www-form-urlencoded'
  And form fields account.createPayload
  When method post
  Then status 200
  And match response == { responseCode: 201, message: 'User created!' }
