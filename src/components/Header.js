import BaseComponent from "./BaseComponent";
import LoginForm from "./LoginForm";

export default class Header extends BaseComponent {
    constructor(page) {
        super(page, '.header');
        this.loginForm = new LoginForm(this._page);
        this._signInBtn = page.locator('.header_signin').last();
    }

    async clickLoginBtn() {
       await this._signInBtn.click();
        return this.loginForm;
    }
}