import '../../support/commands.js'

describe('Testing happy-flow Allabolag, search function', function() {
    it('Goto allabolag-at-url, search for Volvo and verify search result', function() {   
        cy.visit('https://app-at-allabolag.platform.uc.se/')
            .get('form.search-form input').type('Volvo')
            .get('form.search-form button[type="submit"]').click()
            
            .url().should('include', 'what/Volvo')
            .get('a').contains('Volvo Car AB').click()
            
            .url().should('include', 'volvo-car-ab')
    })
  })