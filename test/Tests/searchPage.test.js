import { By } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";
import { SearchPage } from "../pages/searchPage.js";



describe("Search Page", function() {

    beforeEach(async function() {
        should();

        this.driver = await (new DriverManager()).getDriver();
        this.searchPage = new SearchPage(this.driver);

        await this.searchPage.open();

        await sleep(1000);
    });

    after(async function() {
        await this.driver.quit();
    });


    it("Search DevCraft", async function() {
        await this.searchPage.search("DevCraft");

        await this.searchPage.verifyFirstLinkText("DevCraft");
    });

});