import { By, Builder, Select } from "selenium-webdriver";
import { should } from "chai";
import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";



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
    
    let driver;

    users.forEach(user => {
        it(user.testCase, async function() {
            try {
                should();
    
                driver = await (new DriverManager()).getDriver("https://www.telerik.com/");
    
                await sleep(1000);
    
                await driver.findElement(By.xpath("//a[@title='Contact Us']")).click();
    
                let dropdownHelpYou = await driver.findElement(By.id("Dropdown-1"));
                let selectHelpYou = await new Select(dropdownHelpYou);
                await selectHelpYou.selectByValue(user.helpYou);
    
                let dropdownProductInterest = await driver.findElement(By.id("Dropdown-2"));
                let selectProductInterest = await new Select(dropdownProductInterest);
                await selectProductInterest.selectByValue(user.productInterst);
    
                await driver.findElement(By.id("Textbox-1")).sendKeys(user.firstName);
    
                await driver.findElement(By.id("Textbox-2")).sendKeys(user.lastName);
    
                await driver.findElement(By.id("Email-1")).sendKeys(user.email);
    
                await driver.findElement(By.id("Textbox-3")).sendKeys(user.company);
    
                let dropdownCountry = await driver.findElement(By.id("Country-1"));
                let selectCountry = await new Select(dropdownCountry);
                await selectCountry.selectByValue(user.country);
    
                let dropdownState = await driver.findElement(By.id("State-1"));
                let selectState = await new Select(dropdownState);
                await selectState.selectByValue(user.state);
    
                await driver.findElement(By.id("Textbox-4")).sendKeys(user.phone);
    
                await driver.findElement(By.id("Textarea-1")).sendKeys(user.comment);
    
                await sleep(5000);
            } finally {};
        });
    });

    after(async function() {
        await driver.quit();
    });


});