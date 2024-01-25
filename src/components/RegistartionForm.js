import ProfilePage from "../pages/ProfilePage";
import BaseComponent from "./BaseComponent";

export default class RegistartionForm extends BaseComponent {
    constructor(page) {
        super(page, '.modal-dialog');
        this.nameField = this._compomemt.locator('#signupName');
        this.lastNameField = this._compomemt.locator('#signupLastName');
        this.emailField = this._compomemt.locator('#signupEmail');
        this.passwordField = this._compomemt.locator('#signupPassword');
        this.repeatPasswordField = this._compomemt.locator('#signupRepeatPassword');
        this.registerBtn = this._compomemt.getByRole('button', { name: 'Register' });
        this.requireErrText = this._compomemt.locator('.invalid-feedback');
        this.profilePage = new ProfilePage(this._page);
    }

    async fillRegistartionFormFields(name, lastName, email, password, repeatPassword) {
        await this.nameField.fill(name);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(repeatPassword);
    }

    async clickRegisterBtn() {
        await this.registerBtn.click();
        return this.profilePage;
    }
}