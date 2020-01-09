import { authenticateWithMicrosoft } from '../utils/login/authenticateWithMicrosoft' // TODO (add webpack alias): @support/utils/login/authenticateWithMicrosoft

/**
 * Logs into Health Director with the given email and password.
 */
export const login = (email, password) => {
  cy.logout()

  cy.get('#email')
    .clear()
    .invoke('val', email)
    .should('have.value', email)

  cy.get('#password')
    .clear()
    .invoke('val', password)
    .should('have.value', password)

  cy.get('.btn-primary').click()

  authenticateWithMicrosoft(email, password).then((response) => {
    Cypress.env('ACCESS_TOKEN', response)
  })

  // Close php debug bar if open
  cy.get('body').then($body => {
    if ($body.find('.phpdebugbar').length) {
      if (!$body.find('.phpdebugbar-closed').length) {
        cy.get('.phpdebugbar-close-btn').click()
      }
    }
  })
}