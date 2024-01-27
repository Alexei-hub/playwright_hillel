import BasePage from "./BasePage"
import Header from "../components/Header";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page, '/');
        this.header = new Header(page);
    }

}