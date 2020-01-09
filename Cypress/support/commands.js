// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import { login } from './commands/login.command'
import { logout } from './commands/logout.command'
import { setResolution } from './commands/setResolution.command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.002, // threshold for entire image 0.03 === 3%
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.0 }, // threshold for each pixel 0.1 === 10%
  capture: 'viewport' // capture viewport in screenshot
})

const getVue = (identifier) => {
  return Cypress.$(identifier)[0].__vue__
}

Cypress.Commands.add('login', login)
Cypress.Commands.add('logout', logout)
Cypress.Commands.add('setResolution', setResolution)
Cypress.Commands.add('getVue', getVue)