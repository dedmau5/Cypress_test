// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("iframeLoaded", { prevSubject: 'element' },
    ($iframe) => {
      const contents = $iframe.prop('contentWindow')
      return new Promise(resolve => {
        if (
          contents &&
          contents.document.readyState === 'complete'
        ) {
          resolve(contents)
        } else {
          $iframe.on('load', () => {
            resolve(contents)
          })
        }
      })
    })
  
/* Cypress.Commands.add( 'getInDocument', { prevSubject: '#document' }, 
    (document, selector) => Cypress.$(selector, document)
)


Cypress.Commands.add(
    'getInDocument', 
    { prevSubject: '#document' },
    (document, selector) => 
    cy.get(selector, { withinSubject: Cypress.$(selector, document) })
    return Cypress.$(selector, document)
    )
    */

Cypress.Commands.add('getInDocument',
    { prevSubject: 'document' },
    (document, selector) => {
        console.log("selector",selector)
        console.log("document",document)
        console.log("selector",selector)
        console.log("document",document)
        console.log("document",document.querySelector(selector))
        console.log("document",Cypress.$(selector, document))
        return Cypress.$(selector, document)
})


Cypress.Commands.add("getIframeElement", 
    (selector, name) => { 
        cy.get(selector)
            .then($iframe => {
                const $doc = $iframe.contents();
                return cy.wrap($doc[0].body);
        })
        .find(name)
 })
