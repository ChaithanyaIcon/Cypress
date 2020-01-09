// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { readJson } = require('fs-extra')
const { resolve } = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = resolve('.', `cypress.${file}.json`)
  return readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  on('before:browser:launch', (browser = {}, args) => {
    // if (browser.name === 'chrome') {
    //   args.push('--cast-initial-screen-width=1020')
    //   args.push('--cast-initial-screen-height=1280')

    // //   return args
    // }
    if (browser.name === 'electron') {
      args['width'] = 1920
      args['height'] = 1280
      args['resizable'] = false
      return args
    }
  })

  const file = config.env.configFile || 'dev'
  return config = getConfigurationByFile(file)
};