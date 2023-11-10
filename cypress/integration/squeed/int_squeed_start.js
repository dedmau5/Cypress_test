describe('Verifying links and images on squeed intranet site, start page', function() {
    it.skip('Goto Squeed intranet url and look for a certain menues, links and images ', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://sites.google.com/squeed.com/intranet-of-things/hem?authuser=1');
        cy.get("#h\.12dee4e1c10d4aad_168 > div.Nu95r").should("be.visible");
        cy.get(".mBHtvb u5fiyc").click();





        //Click on the 'Kontakta Oss'-menu item in the top menu and assert that the new url is correct
        /* cy.get(' li.nav-item:nth-child(4) > a.nav-link').click();
        cy.url().should('include', '/kontakta-oss/');

        cy.get('span.wpcf7-form-control-wrap.your-name > input').type('Nisse Test');
        cy.get('span.wpcf7-form-control-wrap.your-email > input').type('testnisse@squeed.com');
        cy.get('span.wpcf7-form-control-wrap.your-message > textarea').type('here we type a message. not too long, not too short... Juuuust the right length ofc. :)')
 */
    })
  })