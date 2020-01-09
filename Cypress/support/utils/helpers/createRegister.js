import { input } from './generalFunctions'

export const createRegister = () => {
  cy.get('.link-create-customer').click()
  cy.contains('span', 'Personal Details').should('be.visible')
 // cy.get('.wide .el-input #select-title').click()


  cy.get('.input-field-wrapper [placeholder="Select Title"]').click()
  // cy.contains(
  //   '.patient-title-select-dropdown-wide .el-scrollbar__view .el-select-dropdown__item .epic-text',
  //   'Mrs'
  // ).click()

  cy.contains('#patient-details-form .epic-form-group .result .epic-text','Mrs').click()

 // cy.contains('.patient-title-select-dropdown-wide .el-scrollbar__view .el-select-dropdown__item .epic-text', 'Mrs')

  input('#txt-firstname', 'Dec','Dec')
  

  input('#txt-surname', 'newyear', 'newyear')
  
 
  cy.get('#txt-dob').type('03/02/2018')

  cy.get("[name='patient-gender'")
    .check('male')
    .should('be.checked')
  //cy.get('#country').click()

  cy.get(':nth-child(1) > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input').click()
  cy.get(".drop-down > :nth-child(1) > :nth-child(2)")
    // .contains('span', 'At sea')
    .click()

  //input('#street', '27 station road,indooroopilly', '27 station road,indooroopilly')
  //input('#street', '27 station road')
  cy.get('#street').type('27 station road,indooroopilly')
  //input('#suburb', 'indooroopilly')
  cy.get('#suburb').type('Indooroopilly')
  cy.get(".right-buttons > .epic-button").click()
  cy.wait(2000)
  // cy.get('.right-buttons > .epic-button').click()

}

export const goToCreationStep = (step) => {
  const VUE_EPIC_PAGE_LAYOUT = '.epic-page-layout'
  cy.getVue(VUE_EPIC_PAGE_LAYOUT).invoke('selectStep', step)
}
