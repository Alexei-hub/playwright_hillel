// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// import 'dotenv/config'

require('dotenv').config();

console.log(process.env.BASE_URL)

module.exports = defineConfig({
  testDir: '../tests/registration',

  fullyParallel: true,

  workers: process.env.CI ? 1 : 2,

  reporter: 'html',

  expect: {
    timeout: 10000,
  },

  use: {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.USER_NAME || '',
      password: process.env.USER_PASSWORD || ''
    },
    trace: 'on',
    browserName: 'chromium'
  },

});

