import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: '__tests__/e2e/fixtures',
  screenshotsFolder: '__tests__/e2e/screenshots',
  videosFolder: '__tests__/e2e/videos',
  downloadsFolder: '__tests__/e2e/downloads',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./__tests__/e2e/plugins/index.js')(on, config)
    },
    specPattern: '__tests__/e2e/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '__tests__/e2e/support/index.js',
    baseUrl: 'http://localhost:3000',
  },
})
