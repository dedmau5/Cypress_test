describe('Find how to contact certain squeeders', function() {
    it('Goto Squeed url and look for a menu button ', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://www.squeed.com');

        //Click on the 'Kontakta Oss'-menu item in the top menu and assert that the new url is correct
        cy.get('#mega-menu-item-26').click();
        cy.url().should('include', 'kontakta-oss');

        cy.get('span.wpcf7-form-control-wrap.your-name > input').type('Nisse Test');
        cy.get('span.wpcf7-form-control-wrap.your-email > input').type('testnisse@squeed.com');
        cy.get('span.wpcf7-form-control-wrap.your-message > textarea').type('here we type a message. not too long, not too short... Juuuust the right length ofc. :)')

    })
  })