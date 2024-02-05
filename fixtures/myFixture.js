import MainPage from '../src/pages/MainPage';
const base = require('@playwright/test');


export const testUser1 = base.test.extend({
    fuelExpences: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const profilePage = await loginForm.fillCredentionalsAndClickLogin('aqaHomework18Test1@test.com', 'Hillel2024');
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        use(fuelExpensesPage);
    },
});

export const testUser2 = base.test.extend({
    fuelExpences: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const profilePage = await loginForm.fillCredentionalsAndClickLogin('aqaHomework18Test2@test.com', 'Hillel2024');
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        use(fuelExpensesPage);
    }
});

export const testUser3 = base.test.extend({
    fuelExpences: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const profilePage = await loginForm.fillCredentionalsAndClickLogin('aqaHomework18Test3@test.com', 'Hillel2024');
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        use(fuelExpensesPage);
    }
});

export const testUser4 = base.test.extend({
    fuelExpences: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const profilePage = await loginForm.fillCredentionalsAndClickLogin('aqaHomework18Test4@test.com', 'Hillel2024');
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        use(fuelExpensesPage);
    }
});

export const testUser5 = base.test.extend({
    fuelExpences: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const profilePage = await loginForm.fillCredentionalsAndClickLogin('aqaHomework18Test5@test.com', 'Hillel2024');
        const fuelExpensesPage = await profilePage.clickFuelExpensesBtn();
        use(fuelExpensesPage);
    }
});


