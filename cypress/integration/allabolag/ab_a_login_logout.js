import '../../support/commands.js'

describe('Testing happy-flow Allabolag, login, verify state and then logout', function() {
    it('Goto allabolag-at-url, click login button and log in, verify logged in state and then log out and verify logged out state', function() {        
        cy.visit('https://app-at-allabolag.platform.uc.se/')
            //could probably put the login steps in a before() or call it in a command, but this will suffice for now.  
            .get('#loginForm').click()
            .url().should('include', 'weblogin/login?')
            
            .get('#UP').click()
            .get('#username.form-control').type('198409296376')
            .get('#password.form-control').type('testMinuc2')
            .get('form').submit()

            .url().should('include', 'weblogin/uploginhandler')
            .get('div:nth-child(2) > div > div > div > a:nth-child(1)').click()
            
            .url().should('include', '/konto?')

            //iframe haxx
            .get("iframe").then(($iframe) => {
                const doc = $iframe.contents()
                doc.find('div.container > div > button')
                cy.wrap(doc.find('div.container > div > button')).click(/* {force:true} */)
            })

            //shouldn't need this wait, but it seems to please the iframes.... #%¤""%!!&"
            .wait(2000)

            //iframe haxx, need to force:true on last iframe operation to "exit" the iframe
            .get("iframe").then(($iframe) => {
                const doc = $iframe.contents()
                doc.find('div.container > div > ul > .site-header__dropdownbutton > a').click()
                cy.wrap(doc.find('div.container > div > ul > .site-header__dropdownbutton > a')).click({force:true})
            })

            //test ends here for now, in waiting for a possible bugfix where AT logout doesn't work the same as in PROD 
            //JIRA BBPOR-1501 
    })
})