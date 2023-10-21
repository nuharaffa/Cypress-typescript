import { remove } from "cypress/types/lodash"

export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addItemToCart(){
        // cy.contains()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
    }

    assertItemCart(){
        // cy.get("#add-to-cart-sauce-labs-backpack").should('be.invisible') 
        cy.get("#remove-sauce-labs-backpack").should('be.visible') 
    }

    removeItemCart(){
        // cy.contains()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }

    assertButtonAddToCart(){
        //cy.get("#remove-sauce-labs-backpack").should('be.invisible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
    }

    clickButtonCart(){
        cy.get('.shopping_cart_link').click()
    }
}