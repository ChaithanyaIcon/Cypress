import { getViewports } from '../../support/utils/platform'
import {getDetailedTestName,login,billingTab} from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI for billing tab', function(){

    viewports.forEach(viewport => {
        const testName = getDetailedTestName('billing tab Page', viewport.name)
        it(testName, function() {
          cy.setResolution(viewport)
          cy.visit('/auth/login#/')
          login()
          cy.visit('/customer/profile/0001930150/details#/billing')
          billingTab()
          cy.matchImageSnapshot(testName)
         
        })
      })
   })
