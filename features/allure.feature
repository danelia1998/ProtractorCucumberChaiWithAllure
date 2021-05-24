Feature: To search allure reports in google

    @AllureScenario
    Scenario Outline: Allure Reports Google
      Given I am on google page with title "<title>"
      When I type "<SearchText>"
      Then I validate "<GooglePage>" page
      Then I click search button
      Then I clear search textbox

      Examples:
          | title | SearchText | GooglePage |
          | Google | allure reports  | searchform |
