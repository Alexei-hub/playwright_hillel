import BasePage from "./BasePage";
import ProfileSettingPage from "./ProfileSettingPage";

export default class ProfilePage extends BasePage {
    constructor(page) {
        super(page, '/panel/garage');
        this.tittlePageText = this._page.getByRole('heading', { name: 'Garage' });
        this.settingBtn = this._page.getByText('Settings').last();
        this.profileSettingPage = new ProfileSettingPage(this._page);
    }

    async clickSettingBtn() {
        await this.settingBtn.click();
        return this.profileSettingPage;
    }
}