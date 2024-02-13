import BasePage from "./BasePage";

export default class ProfilePage extends BasePage {
    constructor(page) {
        super(page, 'panel/profile');
        this.centerPageText = this._page.locator('.profile_name').last();
    }
}