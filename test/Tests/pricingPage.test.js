import { By } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";



describe("Pricing Page", function() {
    let driver;

    beforeEach(async function() {
        should();

        driver = await (new DriverManager()).getDriver("https://www.telerik.com/purchase.aspx");

        await sleep(1000);
    });

    after(async function() {
        await driver.quit();
    });


    it("DevCraft Complete Pricing", async function() {      
        let price = await driver.findElement(By.xpath("//div[@class='Purchase-title']/*[contains(text(),'DevCraft Complete')]/../..//div[@class='Purchase-price']")).getText().then(function(value) {
            return value
        });

        price = price.replace(/[^0-9]/g, '').trim();
        
        price.should.equal("1299");
        
        await sleep(3000);
    });
    

});