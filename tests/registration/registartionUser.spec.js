import { test, expect } from '@playwright/test';

test.describe('registartion new user', () => {
    test.beforeEach('go to registartion form', async ({ page }) => {
        await page.goto('/');
        await page.locator('.header_signin').last().click();
        await page.locator('.btn-link').last().click();
    });

    test('positive case. Registartion with correct data and deleting user', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await page.locator('.btn-primary').last().click();
        await expect.soft(page.getByRole('heading', { name: 'Garage' })).toHaveText('Garage');
        await page.getByText('Settings').last().click();
        await page.locator('.btn-danger-bg').click();
        await page.locator('.btn-danger').click();
        await expect.soft(page).toHaveURL('/');
    });

    test('negative case. Empty name field', async ({ page }) => {
        fillRegistartionFormFields(page, '', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Name required');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
        await expect.soft(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('negative case. One symbol in name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'A', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect.soft(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill more 20 symbols in name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'Aaaaaaaaaaaaaaaaaaaaa', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect.soft(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill incorrect data in name field', async ({ page }) => {
        fillRegistartionFormFields(page, '111', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect.soft(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Empty last name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', '', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Last name required');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
        await expect.soft(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('negative case. One symbol in last name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'A', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect.soft(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill more 20 symbols in last name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'Aaaaaaaaaaaaaaaaaaaaa', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect.soft(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill incorrect data in last name field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', '111', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect.soft(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Empty email field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', '', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Email required');
        await expect.soft(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill incorrect data in email field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa@', 'Aqa123456', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect.soft(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Empty password field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa_test@test.com', '', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Password required');
        await expect.soft(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill less than 7 symbols in password field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa1234', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect.soft(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill more than 15 symbols in password field', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa12345678912345', 'Aqa123456')
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect.soft(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    test('negative case. Fill incorrect repeat password', async ({ page }) => {
        fillRegistartionFormFields(page, 'aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa12345')
        await page.locator('#signupRepeatPassword').click({ position: { x: 0, y: 5 } });
        await expect.soft(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
        await expect.soft(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(page.locator('.btn-primary').last()).toBeDisabled();
    });

    async function fillRegistartionFormFields(page, name, lastName, email, password, repeatPassword) {
        await page.locator('#signupName').fill(name);
        await page.locator('#signupLastName').fill(lastName);
        await page.locator('#signupEmail').fill(email);
        await page.locator('#signupPassword').fill(password);
        await page.locator('#signupRepeatPassword').fill(repeatPassword);
    }
});