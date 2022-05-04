/// <reference types="cypress" />

const baseUrl = Cypress.env('baseUrl')

describe('Core Code QA Bootcamp - Inventory System Happy Path', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Execute Happy Path (Login) and Adding QTY to Product', () => {
		// Go to URL
		cy.visit(baseUrl);
		cy.wait(1000)

		// Click on input for Login & Perform Login
		cy.get('.form-control:nth-child(2)').click();
		cy.get('.form-control:nth-child(2)').type('corecodeqa');
		cy.get('.form-control:nth-child(3)').type('Corecode2022!');
		cy.get('#submit').click();
		
		// Validate initial URL
		cy.url().should('contains', 'https://corecode-qa-bootcamp-site.herokuapp.com/stock.php');
		
		// Click on product
		cy.get('img[src*="https://corecode-qa-bootcamp-bucket.s3.us-east-2.amazonaws.com/2022-04-04/Mi-Band-Lamp.jpg"]').click()
		
		// Validate product URL
		cy.url().should('contains', 'https://corecode-qa-bootcamp-site.herokuapp.com/producto.php');
		
		// Add more Stock
		cy.get('.col-sm-6:nth-child(11) img').click();
		cy.get('#quantity').click();
		cy.get('#quantity').type('5');
		cy.get('#reference').click();
		cy.get('#reference').type('CYPRESS TEST');
		cy.get('#add-stock .btn-primary').click();
    });
})
