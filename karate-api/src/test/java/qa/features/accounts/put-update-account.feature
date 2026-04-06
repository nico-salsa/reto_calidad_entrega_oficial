@put
Feature: Account update

Background:
  * def account = call read('classpath:qa/helpers/account-data.js')

Scenario: PUT updateAccount changes persisted account fields
  * call read('classpath:qa/helpers/create-account.feature') account
  * def updateResult = call read('classpath:qa/helpers/update-account.feature') account
  * match updateResult.response == { responseCode: 200, message: 'User updated!' }
  * def detailResult = call read('classpath:qa/helpers/get-account-detail.feature') { email: '#(account.email)' }
  * match detailResult.response == { responseCode: 200, user: '#object' }
  * match detailResult.response.user contains
    """
    {
      name: '#(account.updatePayload.name)',
      email: '#(account.email)',
      title: '#(account.updatePayload.title)',
      first_name: '#(account.updatePayload.firstname)',
      last_name: '#(account.updatePayload.lastname)',
      country: '#(account.updatePayload.country)',
      city: '#(account.updatePayload.city)',
      zipcode: '#(account.updatePayload.zipcode)'
    }
    """
  * def deleteResult = call read('classpath:qa/helpers/delete-account.feature') account
  * match deleteResult.response == { responseCode: 200, message: 'Account deleted!' }
