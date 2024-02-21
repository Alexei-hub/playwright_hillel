import BasePage from "./BasePage";
import GaragePage from "./GaragePage";

export default class ProfileFuelExpensesPage extends BasePage {
    constructor(page) {
        super(page, '/panel/expenses');
        this.expensesPageBody = this._page.locator('body').last();
        this.tittleText = this._page.getByRole('heading', { name: 'Fuel expenses' });
        this.addExpensesBtn = this._page.getByRole('button', { name: 'Add an expense' });
        this.expensesPagePopup = this._page.locator('.modal-content');
        this.addExpensesClosePopupBtn = this._page.locator('.close > span');
        this.removerEntryPopupRemovelBtn = this._page.locator('.btn-danger');
        this.removerEntryPopupCancelBtn = this._page.locator('.modal-content .btn-secondary');
        this.removerEntryPopupText = this._page.locator('.modal-body > p');
        this.carSelectDropdownBtn = this._page.locator('#carSelectDropdown');
        this.carSelectDropdown = this._page.locator('.car-select-dropdown_menu');
        this.lastCarFromDropDown = this._page.locator('.car-select-dropdown_item').last();
        this.tittleOfTable = this._page.locator('.expenses_table tr').first();
        this.firstNoteInTable = this._page.locator('.expenses_table > tbody > tr').first();
        this.deleteBtnsInTable = this._page.locator('.expenses_table td:last-child .btn-delete');
        this.editBtnsInTable = this._page.locator('.expenses_table td:last-child .icon-edit');
        this.imgOnCenter = this._page.locator('.panel-empty > svg');
        this.textBelowCenterImage = this._page.locator('.panel-empty_message');
        this.linkYourGarageBelowCenterImage = this.textBelowCenterImage.getByRole('link', { name: 'your garage' });
    }

    async clickLinkYourGarage() {
        await this.linkYourGarageBelowCenterImage.click();
        return new GaragePage(this._page);
    }
}