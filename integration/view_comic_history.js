/// <reference types="Cypress" />

describe('Comic List', function() {
    beforeEach(() => {
        cy.visit('https://monkeyuser.com/toc/')
    })
    it('view comic history', function() {
        cy.get('.toc').children().should('have.class', 'toc-entry')
        .and('have.length.greaterThan', 0)
        .children().and('have.class', 'et')
        .children().and('have.class', 'entry-content')
    })

    it('view December 4, 2018 comic', function() {
        cy.get('.toc').contains('div', 'December  4, 2018')
        .find('.image-title').click()
        cy.get('.post').children().should('have.class', 'post-date')
        .and('have.class', 'content')
        cy.get('.post-date').contains('04 Dec 2018')
    })

    it('view June 19, 2018 comic', function() {
        cy.get('.toc').contains('div', 'June 19, 2018')
        .find('.image-title').click()
        cy.get('.post').children().should('have.class', 'post-date')
        .and('have.class', 'content')
        cy.get('.post-date').contains('19 Jun 2018')
    })

    it('view May 30, 2017 comic', function() {
        cy.get('.toc').contains('div', 'May 30, 2017')
        .find('.image-title').click()
        cy.get('.post').children().should('have.class', 'post-date')
        .and('have.class', 'content')
        cy.get('.post-date').contains('30 May 2017')
    })  
    
    // test should fail due to deterministic approach to cypress testing
    it('view any comic', function() {
        const comicDates = [
            'May 30, 2017', // valid 
            'June 19, 2018' // valid
            //'June 20, 2018' // invalid
        ]
        cy.containsComic(comicDates)
    })  
})