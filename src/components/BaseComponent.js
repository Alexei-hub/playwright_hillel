export default class BaseComponent {
    constructor(page, componentLocator) {
        this._page = page;
        this._compomemt = this._page.locator(componentLocator);
    }
}