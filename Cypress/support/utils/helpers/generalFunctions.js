export const input = (locator, value, checkvalue) => {
    cy.get(locator)
      .clear()
      .type(value)
      .should('have.value', checkvalue)
  }
  
  export const selectdrop = (locator, value) => {
    cy.get(locator).type(value)
  }
  
  export const inputcontains = (locator, option) => {
    cy.contains(locator, option)
      //  .should('have.value', checkvalue)
      .click()
  }
  export const epicSelect = (container, inputLocator, dropdownLocator, option) => {
    cy.get(container)
      .within(() => {
        cy.get(inputLocator).click()
      })
      .then(() => {
        cy.contains(dropdownLocator, option).click()
      })
  }
  


export const login = () => {
  
    cy.fixture('example').then(credentials => {
      input('#email', credentials.email, credentials.email)
      input('#password', credentials.password, credentials.password)
      
    })
  // } else {
  //   // instead of uisng below steps created one funation and import and used that like above input
      
  //   input('#email', username, username)
  //   // cy.get('#email')
  //   //   .type(username)
  //   //   .should('have.value', username)
  //   input('#password', password, password)
  //   //cy.get('#password').type(password)
  // }
  cy.get("button[data-disable-with='Signing in...']").click()
  cy.contains('h2', 'Associated Business Units').should('be.visible')
}

