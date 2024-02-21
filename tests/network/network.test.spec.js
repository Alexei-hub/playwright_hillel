import { test, expect } from '@playwright/test';
import MainPage from '../../src/pages/MainPage';

test.describe('Network Tests for Homework_19', () => {
    test("Mock data on profile page ", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        const garagePage = await loginForm.fillCredentionalsAndClickLogin("aqaHomework18Test1@test.com", "Hillel2024");
        await page.route('**/users/profile', async route => {
            const response = await route.fetch();
            const json = await response.json();
            json.data.name = 'Semen';
            json.data.lastName = 'Best teacher';
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(json)
            })
        });
        const profilePage = await garagePage.clickProfileBtn();
        await page.waitForTimeout(1000);
        await expect(profilePage.centerPageText).toHaveText('Semen Best teacher');
    });
});


