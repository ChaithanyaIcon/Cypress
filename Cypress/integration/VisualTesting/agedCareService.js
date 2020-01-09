import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, createRegister,goToCreationStep, login,agedCareService } from '../../support/utils/helpers'


const viewports = getViewports()

describe('Check UI For agedCareService', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('agesCareService Page', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      cy.visit('v/#/customer/create')
     // createRegister()    
      goToCreationStep(2)
      agedCareService()
      cy.matchImageSnapshot(testName)
     // cy.get('.right-buttons .epic-button').click()
    })
  })
})