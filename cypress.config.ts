import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    chart: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cypress/reports',
  },
  viewport: {  // Define viewport properties here
    width: 1280,   // Set your desired width
    height: 800    // Set your desired height
  },
  e2e: {
    // We've imported your old Cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
