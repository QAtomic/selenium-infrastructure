import { By, Builder, Select } from "selenium-webdriver";

let driver;

export class DriverManager {
    constructor() {

    }

    async getDriver(url) {
        if (!driver) {
            driver = await new Builder().forBrowser("chrome").build();
            await driver.manage().window().maximize();
            await driver.get(url);
        }
        return driver;
    };
}

