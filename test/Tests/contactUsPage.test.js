import { By, Select } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";
import { ContactUsPage } from "../pages/contactUsPage.js";



describe("Contact Us Form", function() {

    let users = [
        {
            testCase : "Drew Form",
            helpYou : "Product questions",
            productInterst : "Test Studio",   
            firstName : "Drew",
            lastName : "Sorensen",
            email : "automation@test.com",
            company : "Automation",
            country : "United States",
            state : "PA", 
            phone : "215-444-5555",
            comment : "This is a Selenium Test"
        }, 
        {
            testCase : "Mike Form",
            helpYou : "Account activation",
            productInterst : "UI for Vue",  
            firstName : "Mike",
            lastName : "Smith",
            email : "selenium@email.net",
            company : "Javascript",
            country : "United States",
            state : "NJ", 
            phone : "215-777-8899",
            comment : "This is a Javascript Test"
        }
    ]

    users.forEach(user => {
        it(user.testCase, async function() {
            try {
                this.driver = await (new DriverManager()).getDriver();
                this.contactUsPage = new ContactUsPage(this.driver);
                await this.contactUsPage.open();
    
                await sleep(1000);
    
                await this.contactUsPage.fillGetInTouchForm(user);
            } finally {};
        });
    });

    after(async function() {
        await this.driver.quit();
    });


});