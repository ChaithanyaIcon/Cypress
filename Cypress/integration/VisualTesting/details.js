import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, createRegister, login,services,additionalInformation,details } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For Login Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('Login Page', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      createRegister()
      services()
      additionalInformation()
         
      cy.get('.right-buttons > .epic-button').click()
      cy.get('.buttons-container > .btn').click()
      details()
      cy.matchImageSnapshot(testName)
      

    })
  })
})