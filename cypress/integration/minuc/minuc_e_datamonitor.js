describe('monitor that cxLoyalty is up and running', function() {
    it('Goto cxLoyalty stage and verify an element exists to ensure service is up and running', function() {   
        cy.visit('http://uc.stage-affinionservices.com/')
            .url().should('include', '/login')
            .get('.sso-button').should('be.visible')        
    })
  })