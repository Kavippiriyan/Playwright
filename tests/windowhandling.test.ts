import { test } from "@playwright/test"

test("window_handle", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#Open%20New%20Tab")

    console.log(page.url());


    const [newtab] = await Promise.all(
        [
            page.waitForEvent("popup"), page.click("'Click Here'")
        ]
    )

    console.log(newtab.url());
    newtab.click("[id='Open New Window']")
    await page.waitForTimeout(2000);
})