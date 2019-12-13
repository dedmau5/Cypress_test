describe('Testing the login function on minuc.se', function() {
    it('Goto minuc-at-url, click login button and log in', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://www1.minuc.se')
            .get('.site-header__top .btn').click()
            //.contains('#UP')
            .url().should('include', 'weblogin/login?')
            
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()
            //.contains('Privattjänster').click()
            .url().should('include', 'weblogin/uploginhandler')
            
            .get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
            .url().should('include', 'mina-tjanster')
            .get('#userdropdown').click()
            .get('.signout').click()
            .get('.site-header__top .btn').should('be.visible')
            


        /* cy.get('#navbarDropdown').click();

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
        cy.get('[id*="navbarDropdownPortfolio"]').should('contain', 'Joar E'); */
        
    })
  })