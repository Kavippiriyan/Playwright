
import { expect, test } from "@playwright/test";

// test("iframe", async ({ page }) => {

//     await page.goto("https://www.pcloudy.com/blogs/handling-iframes-in-selenium-based-test-automation/")

//     let frame_count = page.frames().length;

//     console.log(frame_count);


//     const myframe = page.frame("hs-form-iframe-0")

//     myframe?.fill("//input[@id='firstname-fd0dd34f-38ca-4103-88e4-0cd5ff240ad1']", "Kavippiriyan!");
//     await page.waitForTimeout(5000);
//     myframe?.fill("//input[@id='phone-fd0dd34f-38ca-4103-88e4-0cd5ff240ad1']", "9344361040");
//     await page.waitForTimeout(5000);

//     expect(await myframe?.locator("//input[@id='firstname-fd0dd34f-38ca-4103-88e4-0cd5ff240ad1']").getAttribute("value"))
// });


//  doubt??

// test("inner_frame", async ({ page }) => {

//     await page.goto("https://ui.vision/demo/webtest/frames/")

//     const frame = await page.frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")

//     await page.waitForTimeout(2000);
//     await frame.locator("//label[@for='i19']").check()
//     let checkbox = frame.locator("//label[@for='i19']")
//     expect(checkbox).toBeChecked();

//     await page.waitForTimeout(2000);

//     console.log("Hi");


//     // inner_frame.check()
// });
