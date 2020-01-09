import { getViewports } from '../../support/utils/platform'
import { getDetailedTestName, detailsTab, login } from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI For detailsTab Page', function() {
  viewports.forEach(viewport => {
    const testName = getDetailedTestName('detailsTab', viewport.name)
    it(testName, function() {
      cy.setResolution(viewport)
      cy.visit('/auth/login#/')
     // cy.matchImageSnapshot(testName)
      login()
      cy.visit('/customer/profile/0000658039/details#/services/list')
      detailsTab()
      cy.matchImageSnapshot({ capture: 'fullPage' })
      //cy.matchImageSnapshot(testName)
     // cy.get(".right-buttons > .epic-button").click()
      // cy.get(".inner-container [type='button']").click()
    })
  })
})