const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
  baseUrl: 'https://automationexercise.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);

      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './tests',
            '@helpers': './tests/helpers'
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenarios/**/*.test.js',
    },
  })