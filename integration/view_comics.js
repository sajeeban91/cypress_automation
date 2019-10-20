/// <reference types="Cypress" />

describe('Home page', function() {
    beforeEach(() => {
        cy.visit('https://monkeyuser.com/')
    })
    it('view random comic', function() {
        cy.get('img[title=random]').first().click()
        cy.location('href').should('contain', 'random')
        // Random generates a style attribute that should be 0 (first) or 100 (last)
        cy.get('.current').should('not.have.attr', 'style', 'margin-left: 100%')
        .and('not.have.attr', 'style', 'margin-left: 0%')
        cy.get('.post').children().should('have.class', 'post-date')
        .and('have.class', 'content')
    })  

    it('view latest comic', function() {
        cy.get("img[title='fresh out of the oven']").first().click()
        cy.location('href').should('contain', 'last')
        // Latest comic should always have style attribute that should be 100
        verifyComicPost(100)
    })
    
    it('view next comic', function() {
        cy.get("img[title='how it all began']").first().click()
        cy.location('href').should('contain', 'first')
        // First comic should always have style attribute that should be 0
        verifyComicPost(0)
    })

})

const verifyComicPost = (marginalValue) => {
    cy.get('.current').should('have.attr', 'style', `margin-left: ${marginalValue}%`)
    cy.get('.post').children().should('have.class', 'post-date')
    .and('have.class', 'content')
}