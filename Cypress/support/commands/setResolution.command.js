export const setResolution = (...args) => {
  var viewport

  if (args.length > 1) {
    viewport = args.map(dimension => {
      return dimension
    })
  } else {
    viewport = args[0]
  }

  if (Cypress._.isArray(viewport)) {
    // (viewport instanceof Array)
    cy.viewport(viewport[0], viewport.slice(-1)[0])
    return
  }

  if (typeof viewport === 'object' && viewport !== null) {
    cy.viewport(Number(viewport.width), Number(viewport.height))
    return
  }

  if (viewport.length === 1) {
    cy.viewport(viewport, viewport)
    return
  }

  cy.viewport(viewport)
}
