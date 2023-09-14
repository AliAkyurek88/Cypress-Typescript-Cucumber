
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^Navigate to url "([^"]*)"$/, (url: string) => {
	cy.visit(url);
});

When(/^Verify that home page is visible successfully$/, () => {
	cy.url().should('eq', 'https://automationexercise.com/')

});

When(/^Click on "([^"]*)" button$/, (containDesc: string) => {
	cy.contains(containDesc).click();
});


When(/^Click View Product for any product on home page$/, () => {
	cy.clickElement("[href='\/product_details\/1']");
});


When(/^Verify product detail is opened$/, () => {
	cy.get(".product-information").should("be.visible");
});

When(/^Increase quantity to 4$/, () => {
    cy.get("#quantity").clear();
	cy.typeText("#quantity","4");
});


When(/^Click Add to cart button$/, () => {
	cy.clickElement(".cart");
});

Then(/^Verify that product is displayed in cart page with exact quantity$/, () => {
	cy.get(".cart_quantity button").should('be.visible').then(function ($el) {
        let actualQuantity:string = $el.text();
       
		expect("4").equal(actualQuantity);
	})
});
