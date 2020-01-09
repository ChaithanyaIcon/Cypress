import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, createRegister, goToCreationStep, login,hospitalServices,additionalInformation } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For Additional Information Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('Additional Information Page', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      // createRegister()
      cy.get('.link-create-customer').click()
      goToCreationStep(3)
      // hospitalServices()
      additionalInformation()
      cy.matchImageSnapshot(testName)
      // cy.get('.right-buttons > .epic-button').click()
      // cy.get('.buttons-container > .btn').click()

    })
  })
})