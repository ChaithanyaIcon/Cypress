import { getViewports } from '../../support/utils/platform'
import {getDetailedTestName,login,medicationAdmission} from '../../support/utils/helpers'

const viewports = getViewports()

describe('Check UI for admission tab', function(){

    viewports.forEach(viewport => {
        const testName = getDetailedTestName('adminssion tab Page', viewport.name)
        it(testName, function() {
          cy.setResolution(viewport)
          cy.visit('/auth/login#/')
          login()
          cy.visit('/customer/profile/0000093236/details#/admission/list')
          medicationAdmission()
          cy.matchImageSnapshot(testName)
         
        })
      })
   })