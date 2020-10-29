describe('Goto BETA-Kreditkollen', () => {

    it('visit the url', () =>  {
        cy.visit('https://www1.uc.se/')
    })
    
    it('login to the application', () => {
        cy.get('.site-header__login').click()
        cy.url().should('include', 'weblogin/login')
        cy.get('#UP').click()
        cy.get('#username').type('197212287275@nomail.com')
        cy.get('#password').type('PassPass3')
        cy.get('#loggainperson').click()
        cy.url().should('include', 'weblogin/uploginhandler')
        cy.get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
    })
    
    it('confirm user is logged in', () => {
        //cy.url().should('include', 'weblogin/uploginhandler')
        //cy.get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
        cy.url().should('include', 'mina-tjanster#customer-credit-score')
    })
    
    it('goto Beta-Nya Kreditkollen', () => {
        cy.get('ul.current__quicknavlinks.hidden-xs > li:nth-child(2) > a').click()
        cy.contains('Beta - Nya Kreditkollen').click()
    })
    
    it('confirm we are inside Nya Kreditkollen', () => {
        cy.url().should('include', '/mina-tjanster/nya-kreditkollen/min-ekonomi/krediter')
        //cy.get('.site-header__login').should('be.visible')
    })
    
})