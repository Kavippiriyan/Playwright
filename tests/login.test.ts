
import {chromium, test} from "@playwright/test"


test("loginpage",async()=>
{
    const browser = await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.hover("'Two Wheelers'")
    await page.click("'Petrol Vehicles'")
})