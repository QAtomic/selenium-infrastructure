import { By } from "selenium-webdriver";
import { should, expect } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";

describe("Home Page", function() {

    beforeEach(async function() {
        should();
        expect();

        this.driver = await (new DriverManager()).getDriver("https://www.telerik.com/");

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("Contact Us Link", async function() {
        await this.driver.findElement(By.xpath("//a[@title='Contact Us']")).click();

        let contactUsPageTitle = await this.driver.getTitle();

        contactUsPageTitle.should.equal("Contact the Telerik Team | Progress Telerik");
        expect(contactUsPageTitle).to.equal("Contact the Telerik Team | Progress Telerik");
    });

    
    it("Search Link", async function() {
        await this.driver.findElement(By.xpath("//a[@title='Search']")).click();

        let searchPageTitle = await this.driver.getTitle();

        searchPageTitle.should.equal("Search Results");
        expect(searchPageTitle).to.equal("Search Results");
    });


    it("Pricing Link", async function() {
        await this.driver.findElement(By.xpath("//li[@class='TK-Menu-Item']/a[contains(text(),'Pricing')]")).click();

        let pricingPageTitle = await this.driver.getTitle();

        pricingPageTitle.should.equal("Purchase Telerik Software Development Tools");
        expect(pricingPageTitle).to.equal("Purchase Telerik Software Development Tools");
    });
    
});