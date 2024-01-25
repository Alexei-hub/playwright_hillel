import BaseComponent from "./BaseComponent";
import RegistartionForm from "./RegistartionForm";

export default class LoginForm extends BaseComponent{
    constructor(page) {
        super(page, 'modal-content');
        this.registartionForm = new RegistartionForm(this._page);
        this._registartionBtn = page.locator('.btn-link').last();
    }   

    async clickRegistrationBtn() {
       await this._registartionBtn.click();
        return this.registartionForm;
    }

}