import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, createRegister, login } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For Login Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('createPatient', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      createRegister()
      cy.matchImageSnapshot(testName)
     // cy.get(".right-buttons > .epic-button").click()
      // cy.get(".inner-container [type='button']").click()
    })
  })
})