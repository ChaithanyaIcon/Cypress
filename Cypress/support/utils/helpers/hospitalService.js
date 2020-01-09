import { input, inputcontains,epicSelector} from './generalFunctions'

export const hospitalServices = () => {
  // cy.get(".right-buttons > .epic-button").click()
  cy.wait(2000)
    cy.get('.patient-service-action > .epic-button').click()
   
    cy.get(":nth-child(1) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input").click()
    cy.contains('.drop-down .result .epic-text','Hospital').click()
   
  
    cy.get(".container-fluid > :nth-child(2) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input").click()
    cy.contains('[data-test-id="facility"] .result .epic-text', 'St John Of God Hospital Murdoch').click()
    cy.get(":nth-child(3) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input").click()
    cy.contains('[data-test-id="ward"] .result .epic-text', 'Bridget Clancy').click()
    cy.contains('.vue-dialog-footer .btn-action', 'Add').click()
  

  
    cy.get(".epic-input .input-field-wrapper [name='Room Number']").type('13')
    cy.get(".input-field-wrapper [placeholder='URN (Hospital)']").type('999999')
    cy.get(".epic-search-field [name='healthfundId']").type('Bupa HI Pty Ltd')
    cy.get(".input-field-wrapper [name='Cover level']").type('full cover')
    cy.get(".input-field-wrapper [name='Membership Number']").type('ABC123')
    cy.get('.el-date-editor .el-input__inner').click()
    cy.contains('.el-date-table .el-date-table__row .available', '2').click()
   // cy.get('.right-buttons .epic-button').click()
   
     }