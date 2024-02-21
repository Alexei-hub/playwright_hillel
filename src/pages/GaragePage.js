import BasePage from "./BasePage";
import ProfileFuelExpensesPage from "./ProfileFuelExpensesPage";
import ProfileSettingPage from "./ProfileSettingPage";
import ProfilePage from "./ProfilePage";

export default class GaragePage extends BasePage {
    constructor(page) {
        super(page, '/panel/garage');
        this.profileSettingPage = new ProfileSettingPage(this._page);
        this.profilePage = new ProfilePage(this._page);
        this.profileFuelExpensesPage = new ProfileFuelExpensesPage(this._page);
        this.tittlePageText = this._page.getByRole('heading', { name: 'Garage' });
        this._fuelExpenses = this._page.getByText('Fuel Expenses').last();
        this._settingBtn = this._page.getByText('Settings').last();
        this._profileBtn = this._page.getByText('Profile').last();
    }

    async clickSettingBtn() {
        await this._settingBtn.click();
        return this.profileSettingPage;
    }

    async clickFuelExpensesBtn() {
        await this._fuelExpenses.click();
        return this.profileFuelExpensesPage;
    }

    async clickProfileBtn() {
        await this._profileBtn.click();
        return this.profilePage;
    }

}