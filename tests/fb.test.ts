import { chromium, test } from "@playwright/test"

test("fb login", async () => {
    const browser = await chromium.launch(
        {
            headless: false
        }
    );
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzExNDI3OTY3LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D")

    await page.fill("input[name='email']", "9025564644");
    await page.waitForTimeout(1000);
    await page.fill("input[name='pass']", "7598364644");
    await page.waitForTimeout(1000);
    await page.click("'Log in'");
    await page.waitForTimeout(10000);
})