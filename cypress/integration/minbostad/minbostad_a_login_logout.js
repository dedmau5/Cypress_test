describe('Testing happy-flow MinBostad, login, verify state and then logout', () => {
    it('Goto minbostad-at-url, click login button and log in, verify logged in state and then log out and verify logged out state', () => {       
        cy.viewport('iphone-x')
        cy.visit('https://www1.minbostad.se')
    })

    it.skip('cookiepopuphandler', () => {
        cy.get('div.cookie-popup a.btn.btn-green.btn-approve').click()
    })
        //minbostad main page
    it('goto login', () => {    
        //.get('div.desktop-menu > ul.desktop-login-link > li > a').click()
        cy.get(':nth-child(2) > .nav-item > .nav-link').click()
        cy.get('div.dropdown-header-menu > div > a').click()
    })

    it('login via SAAM', () => {
        //SAAM login
        cy.url().should('include', 'weblogin/login?')
        cy.get('#UP').click()
        cy.get('#username.form-control').type('198409296376')
        cy.get('#password.form-control').type('testMinuc2')
        cy.get('form').submit()
        //.contains('Privattjänster').click()
        cy.url().should('include', 'weblogin/uploginhandler')
        cy.get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
    })
    
    it('once SAAM is completed, verify logged in state by checking the url', () => {
        //minbostad mina-rapporter page
        cy.url().should('include', 'mina-rapporter')
        cy.get('div > div:nth-child(1) > i').click()
        cy.get('div.dropdown-header-menu > div > a').click()
    })
    
    it('verify checked out state', () => {//.get('div.desktop-menu > ul.desktop-login-link > li > a').click()
        //.get('.signout').click()
        cy.get('div.site-logo-container').should('be.visible')    
    })

})