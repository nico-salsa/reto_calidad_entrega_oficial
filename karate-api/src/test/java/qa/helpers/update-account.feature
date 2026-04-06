Feature: Update account helper

Scenario:
  * def account = __arg
  Given url baseUrl
  And path 'updateAccount'
  And header Content-Type = 'application/x-www-form-urlencoded'
  And form fields account.updatePayload
  When method put
  Then status 200
  And match response == { responseCode: 200, message: 'User updated!' }
