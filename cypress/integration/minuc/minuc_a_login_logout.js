describe('Testing happy-flow Minuc, login, verify state and then logout', () => {    
    it('visit minuc AT url, verify state', () => {    
        cy.visit('https://www1.minuc.se')
            .url().should('include', 'www1.minuc.se')
    })

    it('start login flow and verify state', () => {
        cy.get('.site-header__top .btn').click()
       /*  cy.wait(5000)
        //cy.setCookie('SESSION_TOKEN', 'f5r09t3beegf56q23nua48iijl28hvk58aeds72den4um76aqqmetuaa9p7jogs0oovse41sr9ureh')
        var cookie
        cy.getCookie('SESSION_TOKEN')
            .should('exist')
            .then((c) => {
            // save cookie until we need it
            cookie = c
        }) */
            .url().should('include', 'weblogin/login?')
        
    })

    it('Inside SAAM login, fill out forms and proceed through the flow', () => {        
        cy.get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()
            //.contains('Privattjänster').click()
            .url().should('include', 'weblogin/uploginhandler')
            .get('div:nth-child(2) > div > div > div > a:nth-child(2)').click()
    })
    
    it('back on minuc, verify state, logout, verify state', () => {
        cy.url().should('include', 'mina-tjanster')
            .get('#userdropdown').click()
            .get('.signout').click()
            .get('.site-header__top .btn').should('be.visible')
        })
  })