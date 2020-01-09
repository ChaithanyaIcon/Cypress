export const getBrowserMode = () => {
  const headless = !window.navigator.webdriver
  if (headless) { return 'headless' }
  return 'headed'
}

export const getOperatingSystem = () => {
  const userAgent = window.navigator.platform
  if (userAgent.toLowerCase().includes('win')) { return 'Windows' }
  if (userAgent.toLowerCase().includes('mac')) { return 'MacOS' }
  return 'Unknown'
}

export const getViewports = () => {
  const viewports = [Cypress.env('desktop'), Cypress.env('tab2'), Cypress.env('tab4')].map(viewport => {
    switch (getOperatingSystem()) {
      case 'MacOS':
        if (Number(viewport.height) > Cypress.env('maxHeightMac')) {
          viewport.height = Cypress.env('maxHeightMac')
        }
        break
      case 'Windows':
        if (Number(viewport.height) > Cypress.env('maxHeightWindows')) {
          viewport.height = Cypress.env('maxHeightWindows')
        }
        break
      default:
        break
    }
    return viewport
  })
  return viewports
}

export const getSystemProperties = () => {
    systemProperties = [
        browserMode = getBrowserMode(),
        operatingSystem = getOperatingSystem(),
        viewports = getViewports()
    ]
    return systemProperties

   
    
}