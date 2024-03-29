import { test } from "@playwright/test";

import moment from "moment"


// // test("calender handling using fill function", async ({ page }) => {
// //     await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

// //     page.fill("input[id='sixth_date_picker']", "10/09/2024")
// //     await page.waitForTimeout(2000);
// // })

// test("calender handling", async ({ page }) => {
//     // await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

//     // await page.waitForTimeout(2000);

//     // await page.click("//img[@class='ui-datepicker-trigger']");


//     // let godate = await page.locator("//a[text()='9']")
//     // let next = await page.locator("'Next'")

//     // let i = 0
//     // do {

//     //     await next.click();
//     //     i++
//     // }
//     // while (i < 7)

//     // await page.waitForTimeout(2000);
//     // await godate.click();

//     // let month1 = await page.locator("//span[@class='ui-datepicker-month']");
//     // let month = await month1.textContent();
//     // let date1 = await page.locator("//a[text()='9']")
//     // let date = await date1.textContent()
//     // let year = await page.locator("//span[@class='ui-datepicker-year']").textContent()

//     // console.log("D.O.B : ", date, " - ", month, " - ", year);


// })


// test("calender handling1", async ({ page }) => {

//     await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

//     await page.waitForTimeout(2000);

//     await page.click("//img[@class='ui-datepicker-trigger']");

//     let current_month = await page.locator("//span[@class='ui-datepicker-month']");
//     let this_month_textContent = await current_month.textContent();
//     console.log(this_month_textContent);


//     let next = await page.locator("'Next'")
//     let prev = page.locator("//span[text()='Prev']");

//     // let next_month = await page.locator("//span[text()='May']");
//     // await page.waitForTimeout(1000);
//     // let next_month_textContent = await next_month.textContent();


//     while (await this_month_textContent != 'October') {
//         await page.waitForTimeout(1000);
//         await next.click();
//         this_month_textContent = await page.locator("//span[@class='ui-datepicker-month']").textContent()

//         if (this_month_textContent == "October") {
//             current_month = await page.locator("//span[@class='ui-datepicker-month']")
//         }
//     }


//     let month1 = await page.locator("//span[@class='ui-datepicker-month']")

//     let month = await month1.textContent();
//     let date1 = await page.locator("//a[text()='9']")
//     let date = await date1.textContent()
//     let year = await page.locator("//span[@class='ui-datepicker-year']").textContent()

//     console.log("D.O.B : ", date, " - ", month, " - ", year);


// })


