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
  env: {
    baseUrl: "https://www.tutorialspoint.com/html/html_iframes.htm",
    aboutusUrl: "https://tutorialspoint.com/about/index.htm",
    signupUrl: "https://www.tutorialspoint.com/market/signup.jsp",
    dashboardUrl: "https://www.tutorialspoint.com/market/student/dashboard.jsp",
    loginUrl: "https://www.tutorialspoint.com/market/login.jsp",
  },
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
    defaultCommandTimeout: 1000,
    chromeWebSecurity: false,
    blockHosts: [
      "*hsappstatic.net",
      "*hubspot.com",
      "*hs-banner.com",
      "*usemessages.com",
      "*newrelic.com",
      "*nr-data.net",
      "*datadoghq.com",
      "*vidoomy.com",
      "*googlesyndication.com",
      "*servenobid.com",
      "*amazon-adsystem.com",
      "*sonobi.com",
      "*e-planning.net",
      "*casalemedia.com",
      "*rubiconproject.com",
      "*doubleclick.net",
      "*smartadserver.com",
      "*smilewanted.com",
      "*lijit.com",
      "*bidswitch.net",
      "*onetag-sys.com",
      "*3lift.com",
      "*openx.net",
      "*criteo.com",
      "*shop.pe",
      "*adsrvr.org",
      "*teads.tv",
      "*adnxs.com",
      "*pubmatic.com",
      "*jsdelivr.net",
      "*yellowblue.io",
      "*criteo.net",
      "*a-mo.net",
      "*media.net",
      "*nextmillmedia.com",
      "*adnxs.com",
      "*adpushup.com",
      "*google.com",
      "*rlcdn.com",
      "*googletagmanager.com",
      "*cloudfront.net",
    ],
  },
});
