// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// import 'dotenv/config'

require('dotenv').config();

console.log(process.env.BASE_URL)

module.exports = defineConfig({
  // testDir: '../',

  fullyParallel: true,

  workers: process.env.CI ? 1 : 1,

  reporter: [['html', { open: 'always' }]],

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

  projects: [
    {
      name: 'homework18',
      testDir: '../tests/expences.page.tests',
      dependencies: ['login']
    },
    {
      name: 'login',
      testDir: '../setup',
      testMatch: 'login.setup.hm18.js'
    },
  ],
});

