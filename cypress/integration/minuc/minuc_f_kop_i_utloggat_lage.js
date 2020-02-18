describe('Purchase when not logged in', function() {
    it('Goto minuc-at-url, purchase a product ', function() {     
        cy.visit('https://www1.minuc.se/mitt-kreditbetyg')
        
        //fill out order form
        .get('div.order-form').should('be.visible')
        .get('.form-control[name="personnummer"]').type('198409296376')
        .get('.form-control[name="epost"]').type('testapan.gil@uc.se')
        .get('.form-control[name="mobiltelefon"]').type('0701111111')
        .get('.order-form .btn').click()
        
        //interact with giant pop-up
        .get('body > div.order-layer > .form').should('be.visible')
        .get('div.order-layer > .form > div.conditions > label.conditions-policy-check-label > span').click()
        .get('div.order-layer > .form > div.conditions > label:nth-child(4) > span').click()
        .get('#orderProductPackeBtn').click()
    })
  })