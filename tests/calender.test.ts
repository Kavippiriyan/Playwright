import { test } from "@playwright/test";
import moment from "moment";




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


// test("Using moment", async ({ page }) => {
//     await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

//     await page.waitForTimeout(2000);
//     await page.click("//img[@class='ui-datepicker-trigger']");

//     let next = await page.locator("'Next'")
//     let prev = page.locator("//span[text()='Prev']");

//     let current_year = await page.locator("//span[@class='ui-datepicker-year']");
//     let this_year_textContent = await current_year.textContent();
//     console.log(this_year_textContent);



//     let year_to_select = "2022"

//     let thisyear = moment(year_to_select, "YYYY").isBefore();
//     console.log(thisyear);

//     let month_to_select = "April"
//     let thismonth = moment(month_to_select, "MMMM").isAfter();
//     console.log(thismonth);
//     let current_month = await page.locator("//span[@class='ui-datepicker-month']");
//     let this_month_textContent = await current_month.textContent();

//     while (true) {

//         if (this_year_textContent != year_to_select) {
//             if (thisyear) {

//                 await prev.click();
//                 this_year_textContent = await page.locator("//span[@class='ui-datepicker-year']").textContent()

//             }
//             else {

//                 await next.click();
//                 this_year_textContent = await page.locator("//span[@class='ui-datepicker-year']").textContent()


//             }
//         }

//         else {

//             while (await this_month_textContent != 'April') {
//                 if (thismonth) {

//                     await prev.click();
//                 }
//                 else {

//                     await prev.click();
//                 }
//                 this_month_textContent = await page.locator("//span[@class='ui-datepicker-month']").textContent()

//             }
//         }
//         console.log("hi");
//     }


// }
// )

