import { test } from "@playwright/test"

// test("window_handle", async ({ page }) => {
//     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#Open%20New%20Tab")

//     console.log(page.url());


//     const [newtab] = await Promise.all(
//         [
//             page.waitForEvent("popup"), page.click("'Click Here'")
//         ]
//     )

//     console.log(newtab.url());
//     newtab.click("[id='Open New Window']")
//     await page.waitForTimeout(2000);
// })

test("multiple window_handle", async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    console.log(page.url());


    const [multiple_windows] = await Promise.all(
        [
            page.waitForEvent("popup"),
            page.click("'Open Multiple Windows'"),
            page.click("'Open Multiple Windows'")
        ]
    )
    console.log(multiple_windows.url());
    const no_of_windows = multiple_windows.context().pages();
    console.log("no_of_windows: ", no_of_windows);

    await page.waitForLoadState();

    no_of_windows.forEach(windows => {
        console.log(windows.url());

    })

})