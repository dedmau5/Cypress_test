describe('Testing the login function on minuc.se', function() {
    it('Goto minuc-at-url, click logout button and verify log out', function() {
        //cy.viewport(1280, 800)        
        cy.get('#userdropdown').click()
            .get('.signout').click()
            .get('.site-header__top .btn').should('be.visible')
    })
  })