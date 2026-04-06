@delete
Feature: Account deletion

Background:
  * def account = call read('classpath:qa/helpers/account-data.js')

Scenario: DELETE deleteAccount removes the temporary account and lookup returns not found
  * call read('classpath:qa/helpers/create-account.feature') account
  * def deleteResult = call read('classpath:qa/helpers/delete-account.feature') account
  * match deleteResult.response == { responseCode: 200, message: 'Account deleted!' }
  * def detailResult = call read('classpath:qa/helpers/get-account-detail.feature') { email: '#(account.email)' }
  * match detailResult.response == { responseCode: 404, message: 'Account not found with this email, try another email!' }
