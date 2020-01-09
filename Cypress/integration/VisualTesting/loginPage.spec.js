import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, login } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For Login Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('Login Page', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
      cy.matchImageSnapshot(testName)
      
    })
  })
})