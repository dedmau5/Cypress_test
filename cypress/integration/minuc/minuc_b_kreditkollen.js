describe('Goto Kreditkollen', function() {
    it('Goto minuc-at-url, click login button and follow login-flow, click Kreditkollen and verify you are in the correct place', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://www1.minuc.se')
            .get('.site-header__top .btn').click()
            .url().should('include', 'weblogin/login?')
            
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()

            .url().should('include', 'weblogin/uploginhandler')
            .get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
            
            .url().should('include', 'mina-tjanster')
            .get('#credit-watch-product-head div div div a').click()
            .get('div.introprogress').should('be.visible')
        
    })
  })