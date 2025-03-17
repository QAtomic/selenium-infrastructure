import { By } from "selenium-webdriver";
import { expect } from "chai";
import { sleep } from "../utils/sleep.js";

export class SearchPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://www.telerik.com/search";

        this.inputSearch = this.driver.findElement(By.xpath("//tk-site-search//input"));
        this.linkFirstSearchResult = this.driver.findElement(By.xpath("//ul[@class='TK-Search-Results-List']/li[1]//a"));


    }

    async open() {
        await this.driver.get(this.url);
    }

    async verifyPageTitle() {
        let searchPageTitle = await this.driver.getTitle();

        expect(searchPageTitle).to.equal("Search Results");
    }

    async search(str) {
        await this.inputSearch.sendKeys(str);
        
        //await this.driver.findElement(By.xpath("//tk-site-search//button")).click();
        //I did not submit this search because it is blocked by Captcha.
    }

    async verifyFirstLinkText(str) {
        let firstSearchResultText = await this.linkFirstSearchResult.getText().then(function(value) {
            return value
        });
        
        expect(firstSearchResultText).to.have.string(str);
        
        await sleep(2000);
    }
}