import { By } from "selenium-webdriver";
import { expect } from "chai";
import { sleep } from "../utils/sleep.js";

export class PricingPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://www.telerik.com/purchase.aspx";

    }

    async open() {
        await this.driver.get(this.url);
    }

    async verifyPageTitle() {
        let pricingPageTitle = await this.driver.getTitle();

        expect(pricingPageTitle).to.equal("Purchase Telerik Software Development Tools");
    }

    async verifyProductPrice(product, price) {
        let displayedPrice = await this.driver.findElement(By.xpath("//div[@class='Purchase-title']/*[contains(text(),'" + product + "')]/../..//div[@class='Purchase-price']")).getText().then(function(value) {
            return value.replace(/[^0-9]/g, '').trim();
        });
                
        expect(displayedPrice).to.equal(price);
                
        await sleep(3000);
    }

}