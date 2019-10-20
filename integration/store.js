/// <reference types="Cypress" />

describe('Comic Store', function() {
    beforeEach(() => {
        cy.visit('https://store.monkeyuser.com')
    })
    it('add product to cart and checkout', function() {
        const randomGenerator = (number) => {
            return Math.round(Math.random() * (number - 1))
        }

        cy.get('#shopify-section-featured-collections').as('items').contains('Products')
        cy.get('@items').find('ul').children().its('length').then(($length) => {
            // Get a random item from store
            const listElementNumber = randomGenerator($length)
            cy.get('@items').find('li').eq(listElementNumber).click()

            // Add to cart page
            cy.location('pathname').should('contain', '/collections/frontpage/products')
            cy.get('[data-add-to-cart]').click()

            // Checkout page
            cy.location('pathname').should('eq', '/cart')
        })
    })
})