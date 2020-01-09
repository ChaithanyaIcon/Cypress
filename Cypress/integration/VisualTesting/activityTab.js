import { getViewports } from '../../support/utils/platform'
import {getDetailedTestName,login,activityTab} from '../../support/utils/helpers'
const viewports = getViewports()

describe('Check UI for activity tab', function(){

    viewports.forEach(viewport => {
        const testName = getDetailedTestName('activity tab Page', viewport.name)
        it(testName, function() {
          cy.setResolution(viewport)
          cy.visit('/auth/login#/')
          login()
          cy.visit('customer/profile/0001930150/details#/audit/list')
          activityTab()
          cy.matchImageSnapshot(testName)
         
        })
      })
   })