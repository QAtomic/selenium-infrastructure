import { By } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";

describe("Home Page", function() {
    let driver;

    beforeEach(async function() {
        should();

        driver = await (new DriverManager()).getDriver("https://www.telerik.com/");

        await sleep(1000);
    });

    after(async function() {
        await driver.quit();
    });


    it("Contact Us Link", async function() {
        await driver.findElement(By.xpath("//a[@title='Contact Us']")).click();

        let contactUsPageTitle = await driver.getTitle();

        contactUsPageTitle.should.equal("Contact the Telerik Team | Progress Telerik");
    });


    it("Search Link", async function() {
        await driver.findElement(By.xpath("//a[@title='Search']")).click();

        let searchPageTitle = await driver.getTitle();

        searchPageTitle.should.equal("Search Results");
    });


    it("Pricing Link", async function() {
        await driver.findElement(By.xpath("//li[@class='TK-Menu-Item']/a[contains(text(),'Pricing')]")).click();

        let pricingPageTitle = await driver.getTitle();

        pricingPageTitle.should.equal("Purchase Telerik Software Development Tools");

    });

});