import { authenticateWithMicrosoft } from './login'

export const epicId = dataAttribute => {
  return `[epic-hd-id="${dataAttribute}"]`
}

export const setupTestState = () => {
  const globalAdminEmail = Cypress.env('globalAdminEmail')
  const adminPassword = Cypress.env('adminPassword')

  const generateGlobalAdminToken = () => {
    if (Cypress.env('GA_ACCESS_TOKEN')) {
      return cy
    } else {
      return authenticateWithMicrosoft(globalAdminEmail, adminPassword).then(response => {
        Cypress.env('GA_ACCESS_TOKEN', response)
      })
    }
  }
  return generateGlobalAdminToken()
}
