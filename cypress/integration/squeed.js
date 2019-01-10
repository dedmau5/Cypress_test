describe('Test Squeed', function() {
    it('Goto Squeed url and look for a menu button ', function() {
        cy.viewport(1280, 800)        
        cy.visit('https://www.squeed.com')
        .url().should('include', 'squeed.com');

        cy.get(':nth-child(3) > .sf-button').click();

        // //Should be on a new url wich includes "/commands/actions"
        // cy.url().should('include', '/commands/actions'); 

        // // Get an input, type into it and verify that the value has been updated
        // cy.get('.action-email')
        // .type('fake@email.com')
        // .should('have.value', 'fake@email.com');

    })
  })