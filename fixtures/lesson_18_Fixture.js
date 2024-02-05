import ProfilePage from '../src/pages/ProfilePage';
const base = require('@playwright/test');
const { chromium } = require('@playwright/test');

export const test = base.test.extend({
    fuelExpensesPageWithUser1: async ({ }, use) => {
        const chrome = await chromium.launch({ headless: false });
        const context = await chrome.newContext({ storageState: 'user1.json' });
        const page = await context.newPage();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateTo();
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        await use(fuelExpensesPage);
    },
    fuelExpensesPageWithUser2: async ({ }, use) => {
        const chrome = await chromium.launch({ headless: false });
        const context = await chrome.newContext({ storageState: 'user2.json' });
        const page = await context.newPage();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateTo();
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        await use(fuelExpensesPage);
    },
    fuelExpensesPageWithUser3: async ({ }, use) => {
        const chrome = await chromium.launch({ headless: false });
        const context = await chrome.newContext({ storageState: 'user3.json' });
        const page = await context.newPage();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateTo();
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        await use(fuelExpensesPage);
    },
    fuelExpensesPageWithUser4: async ({ }, use) => {
        const chrome = await chromium.launch({ headless: false });
        const context = await chrome.newContext({ storageState: 'user4.json' });
        const page = await context.newPage();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateTo();
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        await use(fuelExpensesPage);
    },
    fuelExpensesPageWithUser5: async ({ }, use) => {
        const chrome = await chromium.launch({ headless: false });
        const context = await chrome.newContext({ storageState: 'user5.json' });
        const page = await context.newPage();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateTo();
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        await use(fuelExpensesPage);
    },
});
