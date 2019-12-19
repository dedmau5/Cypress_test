describe('Find Squeeders', function() {
    it.skip('Goto Squeed url and look for a menu button ', function() {
        cy.viewport(1280, 800)        
        cy.visit('https://www.squeed.com')
        .url().should('include', 'squeed.com');

        cy.get('#mega-menu-item-29').click();
        cy.get('#mega-menu-item-4730').click();
        cy.url().should('include', 'om-oss');
    })
  })