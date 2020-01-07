describe('Testing the logout function on minuc.se', function() {
    it.skip('Goto minuc-at-url, click logout button and verify log out', function() {
        //cy.viewport(1280, 800)
        cy.visit('https://www1.minuc.se')        
        cy.get('#userdropdown').click()
            .get('.signout').click()
            .get('.site-header__top .btn').should('be.visible')
    })
  })