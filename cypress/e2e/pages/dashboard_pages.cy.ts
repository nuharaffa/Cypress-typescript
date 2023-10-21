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
        cy.get("#remove-sauce-labs-backpack").click()
    }

    assertRemoveItem(){
        //cy.get("#remove-sauce-labs-backpack").should('be.invisible')
        cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible')
    }
}