
// import { chromium, test } from "@playwright/test"


// test("loginpage", async () => {
//     const browser = await chromium.launch({
//         headless: false
//     });
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://in.bookmyshow.com/explore/home/chennai");
//     await page.click("'Movies'")
//     await page.waitForTimeout(5000)
//     await page.close()
//     await context.close();
//     await browser.close();

// })




import { chromium, test, expect } from "@playwright/test"

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

test("loginpage", async () => {
    const browser = await chromium.connect(`wss://cdp.Lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`);
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://in.bookmyshow.com/explore/home/chennai");
    await page.click("'Movies'")
    await page.waitForTimeout(5000)
    await page.close()
    await context.close();
    await browser.close();

})