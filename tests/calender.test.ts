import { test } from "@playwright/test";


// test("calender handling using fill function", async ({ page }) => {
//     await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

//     page.fill("input[id='sixth_date_picker']", "10/09/2024")
//     await page.waitForTimeout(2000);
// })

test("calender handling using moment", async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    await page.waitForTimeout(2000);

    await page.click("//img[@class='ui-datepicker-trigger']");


    let godate = await page.locator("//a[text()='9']")
    let next = await page.locator("'Next'")

    let i = 0
    do {

        await next.click();
        i++
    }
    while (i < 7)

    await page.waitForTimeout(2000);
    await godate.click();

    let month = await page.locator("//span[@class='ui-datepicker-month']").textContent();
    let date1 = await page.locator("//a[text()='9']")
    let date = await date1.textContent()
    let year = await page.locator("//span[@class='ui-datepicker-year']").textContent()

    console.log("D.O.B : ", date, " - ", month, " - ", year);

})




