import { test, expect } from '@playwright/test';
import MainPage from '../../src/pages/MainPage';
import RegistartionForm from '../../src/components/RegistartionForm';

test.describe('registartion new user', () => {
    test.beforeEach('go to registartion form', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateTo();
        const loginForm = await mainPage.header.clickLoginBtn();
        await loginForm.clickRegistrationBtn();
    });

    test('positive case. Registartion with correct data and deleting user', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        const profilePage = registartionForm.clickRegisterBtn();
        await expect.soft((await profilePage).tittlePageText).toHaveText('Garage');
        const profileSettingPage = (await profilePage).clickSettingBtn();
        (await profileSettingPage).removeAccountBtn.click();
        (await profileSettingPage).removeBtnInAcceptPopup.click();
    });

    test('negative case. Empty name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Name required');
        await expect.soft(registartionForm.nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. One symbol in name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('A', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Name has to be from 2 to 20 characters long');
        await expect.soft(registartionForm.nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill more 20 symbols in name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('Aaaaaaaaaaaaaaaaaaaaa', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Name has to be from 2 to 20 characters long');
        await expect.soft(registartionForm.nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill incorrect data in name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('111', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Name is invalid');
        await expect.soft(registartionForm.nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Empty last name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', '', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Last name required');
        await expect.soft(registartionForm.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. One symbol in last name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'A', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect.soft(registartionForm.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill more 20 symbols in last name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'Aaaaaaaaaaaaaaaaaaaaa', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect.soft(registartionForm.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill incorrect data in last name field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', '111', 'aqa_test@test.com', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Last name is invalid');
        await expect.soft(registartionForm.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Empty email field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', '', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Email required');
        await expect.soft(registartionForm.emailField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill incorrect data in email field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa@', 'Aqa123456', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Email is incorrect');
        await expect.soft(registartionForm.emailField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Empty password field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa_test@test.com', '', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Password required');
        await expect.soft(registartionForm.passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill less than 7 symbols in password field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa1234', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect.soft(registartionForm.passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill more than 15 symbols in password field', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa12345678912345', 'Aqa123456')
        await expect.soft(registartionForm.requireErrText).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect.soft(registartionForm.passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });

    test('negative case. Fill incorrect repeat password', async ({ page }) => {
        const registartionForm = new RegistartionForm(page);
        await registartionForm.fillRegistartionFormFields('aqaName', 'aqaLastName', 'aqa_test@test.com', 'Aqa123456', 'Aqa12345')
        await registartionForm.repeatPasswordField.focus();
        await registartionForm.repeatPasswordField.blur();
        await expect.soft(registartionForm.requireErrText).toHaveText('Passwords do not match');
        await expect.soft(registartionForm.repeatPasswordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect.soft(registartionForm.registerBtn).toBeDisabled();
    });
});