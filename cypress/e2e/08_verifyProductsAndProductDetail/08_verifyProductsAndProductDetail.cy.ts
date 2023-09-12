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

When(/^Verify user is navigated to ALL PRODUCTS page successfully$/, () => {
    cy.url().should('eq', 'https://automationexercise.com/products')
});

When(/^Verify the products list is visible$/, () => {
    cy.get(".features_items [class='col-sm-4']").then(($el) => { 
     let itemCount:number = Cypress.$($el).length;
     cy.wrap(itemCount).should("be.greaterThan",0);
              
    }) 
});

Then(/^Clic on product and verify product detail page and that detail detail is visible: product name, category, price, availability, condition, brand$/, () => {
    cy.verifyProductDetail(4);
});

