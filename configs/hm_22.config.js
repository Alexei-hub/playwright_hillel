// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// import 'dotenv/config'

require('dotenv').config();

module.exports = defineConfig({

  fullyParallel: true,

  workers: process.env.CI ? 1 : 1,

  reporter: [['html', { open: 'on-failure' }]],

  expect: {
    timeout: 10000,
  },

  use: {
    trace: 'on',
    browserName: 'chromium'
  },

  projects: [
    {
      name: 'api_login',
      testDir: '../tests/api.tests/',
      testMatch: 'login.test.spec.js'

    },
    {
      name: 'homework22',
      testDir: '../tests/api.tests/',
      testMatch: 'homework_22.spec.js',
      use: {
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: { Cookie: process.env.AUTH_SID || '' }
      },
      dependencies: ['api_login'],
    },
  ],
});

