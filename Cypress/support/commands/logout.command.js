/**
 * Logs out of Health Director.
 */
export const logout = () => {
  cy.clearCookie('ACCESS-TOKEN')
    .visit('/auth/logout')
    .url()
    .should('contain', 'auth/login')
}
