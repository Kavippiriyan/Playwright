
import { test } from "@playwright/test"

test("download files", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/FileDownload.html")

    await page.type("//textarea[@id='textbox']", "Hello My Family")
    await page.waitForTimeout(2000);
    await page.click("(//button[text()='Generate File'])[1]");

    const download = await Promise.all(
        [
            page.waitForEvent("download"),
            page.click('//a[@id="link-to-download"]')
        ]
    )

    const path = await download[0].path();
    console.log(path);
    

})