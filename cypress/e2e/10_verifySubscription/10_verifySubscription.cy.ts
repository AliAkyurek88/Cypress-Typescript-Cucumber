import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^Navigate to url "([^"]*)"$/, (url:string) => {
    cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/')
});

When(/^Scroll down to footer$/, () => {
	cy.scrollTo("bottom");
});


When(/^Verify text "([^"]*)"$/, (containDesc:string) => {
	cy.contains(containDesc).should('be.visible');
});

When(/^Enter email address in input and click arrow button$/, () => {
	cy.typeText("input#susbscribe_email","testdeneme1q2w@gmail.com");
    cy.clickElement("button#subscribe");
});

Then(/^Verify success message "([^"]*)" is visible$/, (containDesc:string) => {
	cy.contains(containDesc).should('be.visible');
	cy.get("div#success-subscribe > .alert.alert-success").should("be.visible");
});
