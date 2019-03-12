describe('Find how to contact certain squeeders', function() {
    it('Goto Squeed url and look for a menu button ', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://www.squeed.com');
        cy.get('#navbarDropdown').click();

        //uncomment the corresponding optins
        cy.contains('Logga in').click();
        //cy.contains('Glömt lösenord').click();
        //cy.contains('Begär inloggning').click();
        
        cy.url().should('include', 'login/');
        //cy.url().should('include', 'gloemt-loesenord/');
        //cy.url().should('include', 'begaer-inloggning/');

        //input credentials
        cy.get('#Email').type('joar@squeed.com');
        cy.get('#Password').type('Vinter56');
        cy.get('form').submit();

        //assert that user Joar E is logged in
        cy.get('[id*="navbarDropdownPortfolio"]').should('contain', 'Joar E');
    })
  })