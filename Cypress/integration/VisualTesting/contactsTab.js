import { getViewports } from '../../support/utils/platform'
import {getDetailedTestName,login,contactsTab} from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI for contacts tab', function(){

    viewports.forEach(viewport => {
        const testName = getDetailedTestName('contacts tab Page', viewport.name)
        it(testName, function() {
          cy.setResolution(viewport)
          cy.visit('/auth/login#/')
          login()
          cy.visit('/customer/profile/0001930150/details#/contacts')
          contactsTab()
          cy.matchImageSnapshot(testName)
         
        })
      })
   })