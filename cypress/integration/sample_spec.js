describe('My First Test', function() {
    it('clicks content "type" and navigates to new url ', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click();

        //Should be on a new url wich includes "/commands/actions"
        cy.url().should('include', '/commands/actions'); 

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');

        //Get password input, type into it
        cy.get('.action-focus')
        .type('test');

        cy.pause();

        //Get blur-field and type in it
        cy.get('.action-blur')
        .type('Again, it is all a test');

        //get clear-field and type in it
        cy.get('.action-clear')
    })
  })