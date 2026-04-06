Feature: Delete account helper

Scenario:
  * def account = __arg
  Given url baseUrl
  And path 'deleteAccount'
  And header Content-Type = 'application/x-www-form-urlencoded'
  And form fields { email: '#(account.email)', password: '#(account.password)' }
  When method delete
  Then status 200
