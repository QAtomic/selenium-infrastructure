import { Builder } from "selenium-webdriver";

let driver;

export class DriverManager {

    async getDriver(url) {
        if (!driver) {
            driver = await new Builder().forBrowser("chrome").build();
            await driver.manage().window().maximize();
            await driver.get(url);
        }
        return driver;
    };

    async getDriver() {
        if (!driver) {
            driver = await new Builder().forBrowser("chrome").build();
            await driver.manage().window().maximize();
        }
        return driver;
    };
}

