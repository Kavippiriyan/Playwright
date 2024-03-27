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

// });

// test("alert1", async ({ page }) => {

//     await page.goto("https://artoftesting.com/samplesiteforselenium");

//     page.on("dialog", async (alert) => {

//         const alert_text = alert.message();
//         console.log(alert_text);

//         alert.accept();


//     }
//     )

//     await page.locator("button:has-text('Generate Confirm Box')").nth(0).click();

//     await page.waitForTimeout(2000);
//     expect(await page.locator("'You pressed OK!'")).toContainText("OK!")

// })

test("alert2", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.on("dialog", async (alert) => {


        await alert.accept("Welcome Kavippiriyan Tester!");
        const alert_text = alert.defaultValue()
        console.log(alert_text);

    }
    )

    await page.locator("'Alert with Textbox '").click();
    await page.waitForTimeout(2000);
    await page.locator("button:has-text('click the button to demonstrate the prompt box ')").click();
    await page.waitForTimeout(2000);
    let expect_result = 'Hello Welcome Kavippiriyan Tester! How are you today'
    expect(await page.locator("'Hello Welcome Kavippiriyan Tester! How are you today'")).toHaveText(expect_result)


})