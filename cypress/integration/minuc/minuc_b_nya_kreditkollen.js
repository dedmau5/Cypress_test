describe('Goto BETA-Kreditkollen', () => {

    it('visit the url', () =>  {
        cy.visit('https://www1.minuc.se/')
    })
    
    it('login to the application', () => {
        cy.get('.site-header__login').click()
        cy.url().should('include', 'weblogin/login')
        cy.get('#UP').click()
        cy.get('#username').type('197212287275@nomail.com')
        cy.get('#password').type('PassPass3')
        cy.get('#loggainperson').click()
        //cy.url().should('include', 'weblogin/uploginhandler')
        //cy.get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
    })
    
    it('confirm user is logged in', () => {
        cy.url().should('include', 'mina-tjanster#customer-credit-score')
    })
    
    it('goto Kreditkollen and confirm we are inside Kerditkollen', () => {
        cy.visit('https://www1.minuc.se/kreditkollen')
        cy.url().should('include', '/kreditkollen')
        cy.get('div > div.order-form.order-form--ua > a').click()
        cy.url().should('include', 'mina-tjanster/kreditkollen2')
    })
    
    it('goto Nya-Kreditkollen and confirm we are inside Nya-Kreditkollen', () => {
        cy.get('.beta-icon').click()
        cy.url().should('include', '/mina-tjanster/nya-kreditkollen/min-ekonomi/krediter')
        cy.get('.risk-percentage-circle').should('be.visible')
    })

    it('click on various menu items inside Nya Kreditkollen and confirm we get there and content loads', () => {
        //lån
        cy.get('.fa-sack-dollar').click()
        cy.get('.second-level-page-title').should('include', 'Lån')
        cy.get('.credits-container').contains('li')
        //csnlån
        cy.get('.fa-graduation-cap').click()
        cy.get('.second-level-page-title').should('include', 'CSN')
        //inkomstuppgifter
        cy.get('.fa-money-check-alt').click()
        cy.get('.second-level-page-title').should('include', 'Inkomstuppgifter')
    })

})