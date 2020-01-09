import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, createRegister, goToCreationStep, login, hospitalServices } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For Login Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('hospitalService Page', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      // createRegister() 
      cy.visit('v/#/customer/create')
      goToCreationStep(2)
      hospitalServices()
      cy.matchImageSnapshot(testName)
      // cy.get('.right-buttons .epic-button').click()
    })
  })
})