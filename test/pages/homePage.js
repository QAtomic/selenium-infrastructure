import { By } from "selenium-webdriver";

export class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://www.telerik.com/";
        this.linkContactUs = this.driver.findElement(By.xpath("//a[@title='Contact Us']"));
        this.linkPricing = this.driver.findElement(By.xpath("//li[@class='TK-Menu-Item']/a[contains(text(),'Pricing')]"));
        this.linkSearch = this.driver.findElement(By.xpath("//a[@title='Search']"));
    }

    async open() {
        await this.driver.get(this.url);
    }

    async clickContactUsLink() {
        await this.linkContactUs.click();
    }

    async clickPricingLink() {
        await this.linkPricing.click();
    }

    async clickSearchLink() {
        await this.linkSearch.click();
    }
}