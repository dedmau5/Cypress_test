import '../../support/commands.js'

    //iframe haxx
    const getIframeDocument = () => {
        return cy
        .get('iframe')
        .its('0.contentDocument')
    }

    const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
    }

describe('Testing happy-flow Allabolag, downloading a pdf', function() {
    it('Goto allabolag-at-url, click ', function() {        
        cy.visit('https://app-at-allabolag.platform.uc.se/5561375113/uc-ab')
            //click köp Årsredovisning  
            .get('div.margin-top > form > button').click()
            
            //fill out purchase form
            //iframe haxx
            getIframeBody().find('#firstName').type('Gil')
            getIframeBody().find('#checkout-form > div.direct-checkout-container > div > div:nth-child(1) > div:nth-child(2) > div > input').type('Jean', {force:true})
            getIframeBody().find('#checkout-form > div.direct-checkout-container > div > div:nth-child(2) > div > div.form-group.has-feedback > input').type('joar.ekendahl@uc.se', {force:true})
            getIframeBody().find('[type="checkbox"]').check({force:true}) 
            getIframeBody().find('.form-group > .btn').click({force:true}) //#checkout-form > div.orderflow__continue > div > input
            .wait(2000)

            //thank you-page, click Login
            .wait(2000)
            getIframeBody().find('body > div.orderflow__page > div.orderflow__wrapper > div > span').should('be.visible')
            //getIframeBody().find('div.orderflow__page > div.orderflow__wrapper > div > div.orderflow__continue > a').click({force:true})
            //body > div.orderflow__page > div.orderflow__wrapper > div > div.orderflow__continue > a
            


            //SAAM-login
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()




    })
})