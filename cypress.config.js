const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //stripTrailingSlash: true,
    specPattern: [
      "cypress/e2e/features/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    watchForFileChanges: false,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,

    // blockHostsRules: [
    //   {
    //     host: "www.example.com",
    //     urlPattern: "/v1/pages/*",
    //   },
    //   {
    //     host: "www.example.com",
    //     urlPattern: "/v1:GetModels*",
    //   },
    //   {
    //     host: "www.example.com",
    //     urlPattern: "/translate_a/l*",
    //   },
    // ],
  },
  env: {
    baseUrl: "https://tutorialspoint.com/html/html_iframes.htm",
  },
});
