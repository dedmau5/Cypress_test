describe('Testing happy-flow MinBostad, login, verify state and then logout', function() {
    it('Goto minbostad-at-url, click login button and log in, verify logged in state and then log out and verify logged out state', function() {       
        cy.viewport('iphone-x')
    
        cy.visit('https://www1.minbostad.se')
            //minbostad main page
            .get('div.cookie-popup a.btn.btn-green.btn-approve').click()
            //.get('div.desktop-menu > ul.desktop-login-link > li > a').click()
            .get('div > div:nth-child(1) > i').click()
            .get('div.dropdown-header-menu > div > a').click()

            //SAAM login
            .url().should('include', 'weblogin/login?')
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()
            //.contains('Privattjänster').click()
            .url().should('include', 'weblogin/uploginhandler')
            .get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
            
            //minbostad mina-rapporter page
            .url().should('include', 'mina-rapporter')
            .get('div > div:nth-child(1) > i').click()
            .get('div.dropdown-header-menu > div > a').click()
            //.get('div.desktop-menu > ul.desktop-login-link > li > a').click()
            //.get('.signout').click()
            .get('div.site-logo-container').should('be.visible')    
    })
  })