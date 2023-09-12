Feature: Place Order Register While Checkout

 Scenario: Go to automationexercise.com and Place Order Register While Checkout

     Given Navigate to url "http://automationexercise.com"
     When Verify that home page is visible successfully
     When Click "Signup / Login" button
     When Fill all details in Signup and create account
     When Verify "ACCOUNT CREATED!" and click "Continue" button
     When Verify "Logged in as username" at top
     When Add products to cart
     When Click "Cart" button
     When Verify that cart page is displayed
     When Click Proceed To Checkout
     When Verify Address Details and Review Your Order
     When Enter description in comment text area and click "Place Order"
     When Enter payment details: Name on Card, Card Number, CVC, Expiration date
     When Click "Pay and Confirm Order" button
     When Verify success message "Your order has been placed successfully!"
     When Click "Delete Account" button
     Then Verify "ACCOUNT DELETED!" and click "Continue" button