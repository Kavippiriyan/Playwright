// import { Page, test } from "@playwright/test"

// // test("window_handle", async ({ page }) => {
// //     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#Open%20New%20Tab")

// //     console.log(page.url());


// //     const [newtab] = await Promise.all(
// //         [
// //             page.waitForEvent("popup"), page.click("'Click Here'")
// //         ]
// //     )

// //     console.log(newtab.url());
// //     newtab.click("[id='Open New Window']")
// //     await page.waitForTimeout(2000);
// // })


import { test } from "@playwright/test";

test("multiple_window_handle", async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");

    console.log(page.url());

    const [multiple_windows] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Open Multiple Windows'"),
        page.click("'Open Multiple Windows'"),

    ]);


    const no_of_windows = multiple_windows.context().pages();
    console.log("no_of_windows: ", no_of_windows.length);

    await page.waitForLoadState();

    for (let i in no_of_windows) {
        console.log(no_of_windows[i].url());

    }

    let first_window;
    let second_window;

    for (const window of no_of_windows) {
        const url = await window.url();
        if (url === "https://www.hyrtutorials.com/p/basic-controls.html") {
            first_window = window;
        } else if (url === "https://www.hyrtutorials.com/p/add-padding-to-containers.html") {
            second_window = window;
        }
    }

    // Now you can interact with the found windows as needed
    if (first_window) {
        let text = await first_window.locator("input[id='firstName']").getAttribute("placeholder")
        console.log(text);

    }

    if (second_window) {

        let text1 = await first_window.locator("input[id='firstName']").getAttribute("placeholder")
        console.log(text1);

    }
});
