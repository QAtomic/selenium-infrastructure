import { By } from "selenium-webdriver";
import { should, expect } from "chai";

export class SearchPage {
    constructor(driver) {
        should();

        this.driver = driver;
        this.url = "https://www.telerik.com/search";

    }

    async open() {
        await this.driver.get(this.url);
    }

    async verifyPageTitle() {
        let searchPageTitle = await this.driver.getTitle();

        searchPageTitle.should.equal("Search Results");
        expect(searchPageTitle).to.equal("Search Results");
    }

}