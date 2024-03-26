
import { chromium, test } from "@playwright/test"


test("loginpage", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://in.bookmyshow.com/explore/home/chennai");
    await page.click("'Movies'")
    await page.waitForTimeout(5000)
    await page.close()

})