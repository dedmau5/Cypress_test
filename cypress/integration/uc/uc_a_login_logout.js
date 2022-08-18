describe('Testing happy-flow UC, login, verify state and logout', () => {
 
    it('visit the url', () =>  {
        cy.visit('https://www1.uc.se/')
 
    })

    it('accept cookies if they pop up', () => {
        cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-banner__accept').click()
    })
 
    it('login to the application', () => {
        cy.get('.site-header__login').click()
        cy.url().should('include', 'weblogin/login')
        cy.get('#UP').click()
        cy.get('#username').type('198409296376')
        cy.get('#password').type('testMinuc2')
        cy.get('#loggainperson').click()
        cy.url().should('include', 'weblogin/uploginhandler')
        cy.get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
    })

    it('confirm user login', () => {
        //cy.url().should('include', 'weblogin/uploginhandler')
        //cy.get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
        cy.url().should('include', 'mina-tjanster/uc')
    })

    it('logout from the application', () => {
        cy.get('.icon-text').click()
        cy.contains('Logga ut').click()
    })

    it('accept cookies if they pop up', () => {
        cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-banner__accept').click()
    })

    it('confirm user logout', () => {
        cy.get('.site-header__login').should('be.visible')
    })
 
})