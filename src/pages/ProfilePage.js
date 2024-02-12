import BasePage from "./BasePage";
import ProfileFuelExpensesPage from "./ProfileFuelExpensesPage";
import ProfileSettingPage from "./ProfileSettingPage";

export default class ProfilePage extends BasePage {
    constructor(page) {
        super(page, '/panel/garage');
        this.profileSettingPage = new ProfileSettingPage(this._page);
        this.profileFuelExpensesPage = new ProfileFuelExpensesPage(this._page);
        this.tittlePageText = this._page.getByRole('heading', { name: 'Garage' });
        this._fuelExpenses = this._page.getByText('Fuel Expenses').last();
        this._settingBtn = this._page.getByText('Settings').last();
    }

    async clickSettingBtn() {
        await this._settingBtn.click();
        return this.profileSettingPage;
    }

    async clickFuelExpensesBtn() {
        await this._fuelExpenses.click();
        return this.profileFuelExpensesPage;
    }
}