import { By } from "selenium-webdriver";
import { should, expect } from "chai";

export class PricingPage {
    constructor(driver) {
        should();

        this.driver = driver;
        this.url = "https://www.telerik.com/purchase.aspx";

    }

    async open() {
        await this.driver.get(this.url);
    }

    async verifyPageTitle() {
        let pricingPageTitle = await this.driver.getTitle();

        pricingPageTitle.should.equal("Purchase Telerik Software Development Tools");
        expect(pricingPageTitle).to.equal("Purchase Telerik Software Development Tools");
    }

}