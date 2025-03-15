import { By, Builder, Select } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";



describe("Pricing Page", function() {
    let driver;

    beforeEach(async function() {
        should();

        driver = await (new DriverManager()).getDriver("https://www.telerik.com/");

        await sleep(1000);
    });

    after(async function() {
        await driver.quit();
    });


    it("DevCraft Complete Pricing", async function() {
        await driver.findElement(By.xpath("//li[@class='TK-Menu-Item']/a[contains(text(),'Pricing')]")).click();
        
        let t = await driver.findElement(By.xpath("//div[@class='Purchase-title']/*[contains(text(),'DevCraft Complete')]")).getText().then(function(value) {
            return value
        });
        
        t.should.equal("DevCraft Complete");
        
        await sleep(3000);
    });
    

});