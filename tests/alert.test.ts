import { expect, test } from "@playwright/test"

// test("alert", async ({ page }) => {

//     await page.goto("https://artoftesting.com/samplesiteforselenium");

//     page.on("dialog", async (alert) => {

//         const alert_text = alert.message();
//         console.log(alert_text);


//         await alert.accept();
//     }
//     )

//     await page.locator("button:has-text('Generate Alert Box')").nth(1).click();

// })

test("alert", async ({ page }) => {

    await page.goto("https://artoftesting.com/samplesiteforselenium");

    page.on("dialog", async (alert) => {

        const alert_text = alert.message();
        console.log(alert_text);

        alert.accept();


    }
    )

    await page.locator("button:has-text('Generate Confirm Box')").nth(0).click();

    await page.waitForTimeout(2000);
    expect(await page.locator("'You pressed OK!'")).toContainText("OK!")

})