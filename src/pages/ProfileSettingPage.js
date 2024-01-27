import BasePage from "./BasePage";

export default class ProfileSettingPage extends BasePage {
    constructor(page) {
        super(page, '/panel/settings');
        this.removeAccountBtn = this._page.locator('.btn-danger-bg');
        this.removeBtnInAcceptPopup = this._page.locator('.btn-danger');
    }
}