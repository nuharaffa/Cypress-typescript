import { remove } from "cypress/types/lodash"

export class CheckoutPage {
    firstname = 'Raffa'
    lastname = 'R'
    postalcode = '12354'
  
    clickButtonCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  
    inputData() {
      cy.get('[data-test="firstName"]').type(this.firstname);
      cy.get('[data-test="lastName"]').type(this.lastname);
      cy.get('[data-test="postalCode"]').type(this.postalcode);
    }
    
    clickContinueButton(){
        cy.get('[data-test="continue"]').click();
    }

    verifyButtonFinish(){
        cy.get('[data-test="finish"]').should("be.visible");
    }

    verifyErrorMessageContainer(){
        cy.get('.error-message-container').should("be.visible");
    }
}