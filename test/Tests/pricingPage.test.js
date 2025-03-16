import { By } from "selenium-webdriver";
import { should, expect } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";
import { PricingPage } from "../pages/pricingPage.js";


describe("Pricing Page", function() {

    beforeEach(async function() {
        should();

        this.driver = await (new DriverManager()).getDriver();
        this.pricingPage = new PricingPage(this.driver);

        await this.pricingPage.open();

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("DevCraft Complete Pricing", async function() {  
        await this.pricingPage.verifyProductPrice("DevCraft Complete", "1299");
    });
    

});