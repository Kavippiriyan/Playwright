import { chromium, test as basetest } from "@playwright/test"

import Login from "../PageObjectModel/login.test"
import Home from "../PageObjectModel/Home.test"
import special_page from "../PageObjectModel/special_page.test"
import Register from "../PageObjectModel/Register.test"


type pages =
    {
        registerpage: Register,
        loginpage: Login,
        homepage: Home,
        spcial_page: special_page
    }

const capabilities = {
    browserName: "chrome",
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        user: "kavippiriyanveradis",
        accessKey: "bueVTWLsDt6Zu7PGDRQjoAV7yp6Osn2yzzCDNQ8xlboB7j4lY2", // Fill in your actual access key here
        name: "Playwright Test",
        video: true, // Enable video recording
        console: true, // Enable console logging
        tunnel: false, // Enable tunnel setup
        tunnelName: "" // Specify tunnel name
    }
};


const testpages = basetest.extend<pages>
    (
        {

            page: async ({ }, use) => {

                const browser = await chromium.connect(`wss://cdp.Lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
                const context = await browser.newContext();
                const ltpage = await context.newPage();
                await use(ltpage)
                await ltpage.close()
                await context.close()
                await browser.close()
            },

            registerpage: async ({ page }, use) => {
                await use(new Register(page))

            },

            loginpage: async ({ page }, use) => {
                await use(new Login(page))

            },

            homepage: async ({ page }, use) => {
                await use(new Home(page))

            },

            spcial_page: async ({ page }, use) => {
                await use(new special_page(page))

            }
        }
    )

export const test = testpages
export const expect = testpages.expect