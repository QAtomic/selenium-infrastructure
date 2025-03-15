import { By, Builder, Select } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../testUtils/sleep.js"



describe("Pricing Page", function() {
    let driver;

    this.beforeEach(async function() {
        should();

        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.telerik.com/");

        await sleep(1000);
    });

    this.afterEach(async function() {
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