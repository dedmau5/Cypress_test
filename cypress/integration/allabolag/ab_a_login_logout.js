import '../../support/commands.js'

describe('Testing happy-flow Allabolag, login, verify state and then logout', function() {
    it('Goto allabolag-at-url, click login button and log in, verify logged in state and then log out and verify logged out state', function() {
        //cy.viewport(1280, 800)        
        cy.visit('https://app-at-allabolag.platform.uc.se/')
            .get('#loginForm').click()
            //.contains('#UP')
            .url().should('include', 'weblogin/login?')
            
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()
            
            //.contains('Privattjänster').click()
            .url().should('include', 'weblogin/uploginhandler')
            .get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
            
            .url().should('include', '/konto?')

            .get("iframe").then(($iframe) => {
                const doc = $iframe.contents()
                doc.find('div.container > div > button')
                cy.wrap(doc.find('div.container > div > button')).click(/* {force:true} */)
            })
            
            .wait(2000)

            .get("iframe").then(($iframe) => {
                const doc = $iframe.contents()
                doc.find('div.container > div > ul > .site-header__dropdownbutton > a').click()
                cy.wrap(doc.find('div.container > div > ul > .site-header__dropdownbutton > a')).click({force:true})
            })
    })
})