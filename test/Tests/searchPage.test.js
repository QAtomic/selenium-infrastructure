import { By } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";



describe("Search Page", function() {

    beforeEach(async function() {
        should();

        this.driver = await (new DriverManager()).getDriver("https://www.telerik.com/search");

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("Search Automation", async function() {
        await this.driver.findElement(By.xpath("//a[@title='Search']")).click();

        await this.driver.findElement(By.xpath("//tk-site-search//input")).sendKeys("Automation Tests");

        await this.driver.findElement(By.xpath("//tk-site-search//button")).click();

        await sleep(1000);

        let firstSearchResultText = await this.driver.findElement(By.xpath("//ul[@class='TK-Search-Results-List']/li[1]//a")).getText().then(function(value) {
            return value
        });

        firstSearchResultText.should.have.string("Avoiding Brittle Automation");
        expect(firstSearchResultText).to.have.string("Avoiding Brittle Automation");

        await sleep(3000);

    });

});