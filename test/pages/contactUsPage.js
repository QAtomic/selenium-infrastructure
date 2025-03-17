import { By, Select } from "selenium-webdriver";
import { expect } from "chai";
import { sleep } from "../utils/sleep.js";

export class ContactUsPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://www.telerik.com/contact";
        
        this.dropdownHelpYou = this.driver.findElement(By.id("Dropdown-1"));
        this.dropdownProductInterest = this.driver.findElement(By.id("Dropdown-2"));
        this.inputFirstName = this.driver.findElement(By.id("Textbox-1"));
        this.inputLastName = this.driver.findElement(By.id("Textbox-2"));
        this.inputBusinessEmail = this.driver.findElement(By.id("Email-1"));
        this.inputCompanyName = this.driver.findElement(By.id("Textbox-3"));
        this.dropdownCountry = this.driver.findElement(By.id("Country-1"));
        this.dropdownState = this.driver.findElement(By.id("State-1"));
        this.inputPhone = this.driver.findElement(By.id("Textbox-4"));
        this.inputComments = this.driver.findElement(By.id("Textarea-1"));
    }

    async open() {
        await this.driver.get(this.url);
    }

    async verifyPageTitle() {
        let contactUsPageTitle = await this.driver.getTitle();

        expect(contactUsPageTitle).to.equal("Contact the Telerik Team | Progress Telerik");
    }

    async fillGetInTouchForm(user) {
        let selectHelpYou = await new Select(this.dropdownHelpYou);
        await selectHelpYou.selectByValue(user.helpYou);
            
        let selectProductInterest = await new Select(this.dropdownProductInterest);
        await selectProductInterest.selectByValue(user.productInterst);
            
        await this.inputFirstName.sendKeys(user.firstName);
            
        await this.inputLastName.sendKeys(user.lastName);
            
        await this.inputBusinessEmail.sendKeys(user.email);
            
        await this.inputCompanyName.sendKeys(user.company);
            
        let selectCountry = await new Select(this.dropdownCountry);
        await selectCountry.selectByValue(user.country);
            
        let selectState = await new Select(this.dropdownState);
        await selectState.selectByValue(user.state);
            
        await this.inputPhone.sendKeys(user.phone);
            
        await this.inputComments.sendKeys(user.comment);
            
        await sleep(3000);
    }

}