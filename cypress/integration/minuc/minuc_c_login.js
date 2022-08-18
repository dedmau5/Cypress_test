describe('Testing the login function on minuc.se', function() {
    //skipping this test for now due to session sometimes holding onto the login after closing, so chaining test doesn't work yet.. 
    it('Goto minuc-at-url, click login button and log in', function() {     
        cy.visit('https://www1.minuc.se')
            .get('.site-header__top .btn').click()
            .url().should('include', 'weblogin/login?')
            
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()
            .url().should('include', 'weblogin/uploginhandler')
            
            .get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
            .url().should('include', 'mina-tjanster')  
    })
  })