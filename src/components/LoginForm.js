import GaragePage from "../pages/GaragePage";
import BaseComponent from "./BaseComponent";
import RegistartionForm from "./RegistartionForm";

export default class LoginForm extends BaseComponent {
    constructor(page) {
        super(page, '.modal-content');
        this.registartionForm = new RegistartionForm(this._page);
        this.profilePage = new GaragePage(this._page);
        this._registartionBtn = this._compomemt.locator('.btn-link').last();
        this._emailField = this._compomemt.locator('#signinEmail');
        this._passwordField = this._compomemt.locator('#signinPassword');
        this._loginBtn = this._compomemt.locator('.btn-primary');
    }

    async clickRegistrationBtn() {
        await this._registartionBtn.click();
        return this.registartionForm;
    }

    async fillCredentionalsAndClickLogin(email, password) {
        await this._emailField.fill(email);
        await this._passwordField.fill(password);
        await this._loginBtn.click();
        return this.profilePage;
    }

}