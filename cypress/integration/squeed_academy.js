describe('Find how to contact certain squeeders', function() {
    it('Goto Squeed url and look for a menu button ', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://www.squeed.com');

        //Click on the 'Squeed Academy'-menu item in the top menu, click the 'Hela Kursutbudet'-menu item and assert that the new url is correct
        cy.get('#navbarResponsive > ul:nth-child(1)').click(); 
        cy.get('#navbarResponsive > ul:nth-child(1) > li.nav-item.dropdown.show > div > a:nth-child(2)').click();
        cy.url().should('include', 'hela-kursutbudet');

        //Click on the first 'Mer info'-button
        cy.get('body > div > div:nth-child(3) > div > div > div:nth-child(1) > div:nth-child(3) > div > div.col-12.col-md-4.no-padding > a').click();
       



        //'span.wpcf7-form-control-wrap.your-message > textarea'  ... #navbarDropdownPortfolio:nth-child(2)
//        cy.url().should('include', 'kontakta-oss');

//        cy.get('span.wpcf7-form-control-wrap.your-name > input').type('Nisse Test');
//        cy.get('span.wpcf7-form-control-wrap.your-email > input').type('testnisse@squeed.com');
//        cy.get('span.wpcf7-form-control-wrap.your-message > textarea').type('here we type a message. not too long, not too short... Juuuust the right length ofc. :)')
//
    })
  })