import { By, Builder, Select } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../testUtils/sleep.js"
import { DriverManager } from "../managers/driverManager.js";



describe("Search Page", function() {
    let driver;

    beforeEach(async function() {
        should();

        driver = await (new DriverManager()).getDriver("https://www.telerik.com/");

        await sleep(1000);
    });

    after(async function() {
        await driver.quit();
    });


    it("Search Automation", async function() {
        await driver.findElement(By.xpath("//a[@title='Search']")).click();

        await driver.findElement(By.xpath("//tk-site-search//input")).sendKeys("Automation Tests");

        await driver.findElement(By.xpath("//tk-site-search//button")).click();

        await sleep(1000);

        let firstSearchResultText = await driver.findElement(By.xpath("//ul[@class='TK-Search-Results-List']/li[1]//a")).getText().then(function(value) {
            return value
        });

        firstSearchResultText.should.have.string("Avoiding Brittle Automation");

        await sleep(3000);

    });

});