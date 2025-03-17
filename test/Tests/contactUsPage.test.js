import { sleep } from "../utils/sleep.js";
import { DriverManager } from "../managers/driverManager.js";
import { ContactUsPage } from "../pages/contactUsPage.js";
import { userData } from "../data/userData.js";


describe("Contact Us Form", function() {

    let users = userData;

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