import { expect } from '@playwright/test';
import { test } from '../../fixtures/lesson_18_Fixture.js';

test.describe('Fuel Expences Tests for Homework_18', () => {
    test("If the user doesn't have a car, user sees the next page", async ({ fuelExpensesPageWithUser1, page }) => {
        await expect.soft(fuelExpensesPageWithUser1.expensesPageBody).toHaveScreenshot('testUser1.png', { maxDiffPixelRatio: 0.2 });
        await expect.soft(fuelExpensesPageWithUser1.addExpensesBtn).toBeDisabled();
        await expect.soft(fuelExpensesPageWithUser1.tittleText).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser1.imgOnCenter).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser1.textBelowCenterImage).toHaveText('You don’t have any cars in your garage');
        const profilePage = await fuelExpensesPageWithUser1.clickLinkYourGarage();
        await expect(profilePage._page).toHaveURL('panel/garage');
    });

    test("If the user has the car but no expenses", async ({ fuelExpensesPageWithUser2 }) => {
        await expect.soft(fuelExpensesPageWithUser2.expensesPageBody).toHaveScreenshot('testUser2.png', { maxDiffPixelRatio: 0.2 });
        await expect.soft(fuelExpensesPageWithUser2.addExpensesBtn).toBeEnabled();
        await fuelExpensesPageWithUser2.addExpensesBtn.click();
        await expect.soft(fuelExpensesPageWithUser2.expensesPagePopup).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser2.expensesPagePopup).toContainText('Add an expense');
        await fuelExpensesPageWithUser2.addExpensesClosePopupBtn.click();
        await expect.soft(fuelExpensesPageWithUser2.tittleText).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser2.imgOnCenter).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser2.textBelowCenterImage).toHaveText('You don’t have any fuel expenses filed in');
    });

    test("Fuel expenses table", async ({ fuelExpensesPageWithUser3 }) => {
        await expect.soft(fuelExpensesPageWithUser3.tittleText).toBeVisible();
        await fuelExpensesPageWithUser3.carSelectDropdownBtn.click();
        await expect.soft(fuelExpensesPageWithUser3.carSelectDropdown).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser3.lastCarFromDropDown).toBeEnabled();
        await expect(fuelExpensesPageWithUser3.tittleOfTable).toHaveText('Date Mileage Liters used Total cost', { useInnerText: true });
    });

    test("The user can remove expense entries", async ({ fuelExpensesPageWithUser4 }) => {
        await fuelExpensesPageWithUser4.firstNoteInTable.hover();
        await expect.soft(fuelExpensesPageWithUser4.deleteBtnsInTable.first()).toBeVisible();
        await fuelExpensesPageWithUser4.deleteBtnsInTable.first().click();
        await expect.soft(fuelExpensesPageWithUser4.expensesPagePopup).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser4.expensesPagePopup).toContainText('Remove entry');
        await fuelExpensesPageWithUser4.removerEntryPopupCancelBtn.click();
        await expect.soft(fuelExpensesPageWithUser4.expensesPagePopup).not.toBeVisible();
        const firstNoteText = await fuelExpensesPageWithUser4.firstNoteInTable.innerText();
        const newLocal = firstNoteText.split('\t');
        const firstNoteDate = newLocal[0];
        const firstNoteMillage = newLocal[1];
        await fuelExpensesPageWithUser4.firstNoteInTable.hover();
        await fuelExpensesPageWithUser4.deleteBtnsInTable.first().click();
        await expect.soft(fuelExpensesPageWithUser4.removerEntryPopupText).toHaveText(`Do you really want to remove fuel expense entry from ${firstNoteDate}?`);
        await fuelExpensesPageWithUser4.removerEntryPopupRemovelBtn.click();
        await expect.soft(fuelExpensesPageWithUser4.firstNoteInTable).not.toContainText(firstNoteMillage);
    });

    test("The user can edit expense entries", async ({ fuelExpensesPageWithUser5 }) => {
        await fuelExpensesPageWithUser5.firstNoteInTable.hover();
        await expect.soft(fuelExpensesPageWithUser5.editBtnsInTable.first()).toBeVisible();
        await fuelExpensesPageWithUser5.editBtnsInTable.first().click();
        await expect.soft(fuelExpensesPageWithUser5.expensesPagePopup).toBeVisible();
        await expect.soft(fuelExpensesPageWithUser5.expensesPagePopup).toContainText('Edit an expense');
    });
});