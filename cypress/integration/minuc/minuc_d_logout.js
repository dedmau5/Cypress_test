describe('Testing the logout function on minuc.se', function() {
    //skipping this test for now - dependant on minuc_c_login.js to work properly 
    it.skip('Goto minuc-at-url, click logout button and verify log out', function() {
        cy.visit('https://www1.minuc.se')        
            .get('#userdropdown').click()
            .get('.signout').click()
            .get('.site-header__top .btn').should('be.visible')
    })
  })