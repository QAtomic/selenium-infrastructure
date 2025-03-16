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

        this.pricingPage.open();

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("DevCraft Complete Pricing", async function() {      
        let price = await this.driver.findElement(By.xpath("//div[@class='Purchase-title']/*[contains(text(),'DevCraft Complete')]/../..//div[@class='Purchase-price']")).getText().then(function(value) {
            return value
        });

        price = price.replace(/[^0-9]/g, '').trim();
        
        price.should.equal("1299");
        expect(price).to.equal("1299");
        
        await sleep(3000);
    });
    

});