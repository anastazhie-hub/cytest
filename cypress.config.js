const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 
module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/*.js',
      'cypress/e2e/**/*.js'
    ],
    //defaultCommandTimeout: 10000,
    //pageLoadTimeout: 70000
  }
})