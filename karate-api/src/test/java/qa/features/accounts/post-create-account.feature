@post
Feature: Account creation

Background:
  * def account = call read('classpath:qa/helpers/account-data.js')

Scenario: POST createAccount persists a temporary account that can be queried by email
  * call read('classpath:qa/helpers/create-account.feature') account
  * def detailResult = call read('classpath:qa/helpers/get-account-detail.feature') { email: '#(account.email)' }
  * match detailResult.response == { responseCode: 200, user: '#object' }
  * match detailResult.response.user contains
    """
    {
      name: '#(account.createPayload.name)',
      email: '#(account.email)',
      title: '#(account.createPayload.title)',
      first_name: '#(account.createPayload.firstname)',
      last_name: '#(account.createPayload.lastname)',
      country: '#(account.createPayload.country)',
      city: '#(account.createPayload.city)',
      zipcode: '#(account.createPayload.zipcode)'
    }
    """
  * def deleteResult = call read('classpath:qa/helpers/delete-account.feature') account
  * match deleteResult.response == { responseCode: 200, message: 'Account deleted!' }
