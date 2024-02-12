const { test } = require('@playwright/test');
import MainPage from '../src/pages/MainPage';


test.describe('login as different users', () => {
    test('login as user 1', async ({ page }) => {
        await loginWithUser(page, 'aqaHomework18Test1@test.com', 'Hillel2024');
        await page.context().storageState({ path: 'user1.json' });
    });

    test('login as user 2', async ({ page }) => {
        await loginWithUser(page, 'aqaHomework18Test2@test.com', 'Hillel2024');
        await page.context().storageState({ path: 'user2.json' });
    });

    test('login as user 3', async ({ page }) => {
        await loginWithUser(page, 'aqaHomework18Test3@test.com', 'Hillel2024');
        await page.context().storageState({ path: 'user3.json' });
    });

    test('login as user 4', async ({ page }) => {
        await loginWithUser(page, 'aqaHomework18Test4@test.com', 'Hillel2024');
        await page.context().storageState({ path: 'user4.json' });
    });

    test('login as user 5', async ({ page }) => {
        await loginWithUser(page, 'aqaHomework18Test5@test.com', 'Hillel2024');
        await page.context().storageState({ path: 'user5.json' });
    });
});

async function loginWithUser(page, email, pass) {
    const mainPage = new MainPage(page);
    await mainPage.navigateTo();
    const loginForm = await mainPage.header.clickLoginBtn();
    const profilePage = await loginForm.fillCredentionalsAndClickLogin(email, pass);
    await profilePage.clickFuelExpensesBtn();
}

