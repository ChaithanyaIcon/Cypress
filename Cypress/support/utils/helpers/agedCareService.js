import { input, inputcontains, epicSelector } from './generalFunctions'

export const agedCareService = () => {
    cy.wait(2000)
    cy.get(".patient-service-action > .epic-button").click()

    cy.get(':nth-child(1) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input').click()

    cy.contains('[data-test-id="service-type"] .result .epic-text', 'Aged Care').click()

  // cy.get('[data-test-id="facility-input"] .input-field-wrapper').click()
   cy.get(".container-fluid > :nth-child(2) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input").click()
  
   
    cy.get(":nth-child(2) > .epic-text").click()
 

    cy.get(":nth-child(3) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input").click()
    cy.get(':nth-child(2) > .epic-text').click()

    cy.contains('.vue-dialog-footer .btn-action', 'Add').click()
    cy.get('[name="Room Number"]').type("33")
    cy.get('[name="Bed Number"]').type("25")
    cy.get(".epic-search-field [name='healthfundId']").type('Bupa HI Pty Ltd')
    cy.get(".input-field-wrapper [name='Cover level']").type('full cover')
    cy.get(".input-field-wrapper [name='Membership Number']").type('ABC123')
    cy.get('.el-date-editor .el-input__inner').click()
    cy.contains('.el-date-table .el-date-table__row .available', '2').click()
    cy.contains('.epic-link', 'ADD DOCTOR +').click()
    cy.get('.doctor-query .input-field-wrapper [placeholder="Search for doctors by Name"]').type("peter test")
    cy.wait(2000)
    cy.get('.vuetable-component > a').click()
    cy.get('.doctor-referral .btn').click()


}


