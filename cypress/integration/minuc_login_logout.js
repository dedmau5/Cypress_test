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
        
    })
  })