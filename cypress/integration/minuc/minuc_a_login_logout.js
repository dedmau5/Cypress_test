describe('Testing happy-flow Minuc, login, verify state and then logout', function() {
    it('Goto minuc-at-url, click login button and log in, verify logged in state and then log out and verify logged out state', function() {       
        cy.visit('https://www1.minuc.se')
            .get('.site-header__top .btn').click()
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