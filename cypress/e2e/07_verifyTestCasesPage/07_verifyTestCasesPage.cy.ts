import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^Navigate to url "([^"]*)"$/, (url:string) => {
	cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/')
});

When(/^Click on "([^"]*)" button$/, (containDesc:string) => {
	cy.log(containDesc);
	cy.contains(containDesc).should('be.visible').click()
});

Then(/^Verify user is navigated to test cases page successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/test_cases')
});
