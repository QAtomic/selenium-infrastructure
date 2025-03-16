import { By } from "selenium-webdriver";
import { should, expect } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";
import { HomePage } from "../pages/homePage.js";
import { ContactUsPage } from "../pages/contactUsPage.js";
import { PricingPage } from "../pages/pricingPage.js";
import { SearchPage } from "../pages/searchPage.js";

describe("Home Page", function() {

    beforeEach(async function() {
        this.driver = await (new DriverManager()).getDriver();
        
        this.homePage = new HomePage(this.driver);
        this.contactUsPage = new ContactUsPage(this.driver);
        this.pricingPage = new PricingPage(this.driver);
        this.searchPage = new SearchPage(this.driver);

        await this.homePage.open();

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("Contact Us Link", async function() {
        await this.homePage.clickContactUsLink();

        await this.contactUsPage.verifyPageTitle();
    });

    
    it("Search Link", async function() {
        await this.homePage.clickSearchLink();

        await this.searchPage.verifyPageTitle();
    });


    it("Pricing Link", async function() {
        await this.homePage.clickPricingLink();

        await this.pricingPage.verifyPageTitle();
    });
    
});