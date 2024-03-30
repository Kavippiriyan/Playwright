
import { test } from "@playwright/test"

// test("download files", async ({ page }) => {
//     await page.goto("https://demo.automationtesting.in/FileDownload.html")

//     await page.type("//textarea[@id='textbox']", "Hello My Family")
//     await page.waitForTimeout(2000);
//     await page.click("(//button[text()='Generate File'])[1]");

//     const download = await Promise.all(
//         [
//             page.waitForEvent("download"),
//             page.click('//a[@id="link-to-download"]')
//         ]
//     )

//     // const path = await download[0].path();
//     // console.log(path);

//     const path = await download[0].suggestedFilename()

//     await download[0].saveAs(path);

// })


test("upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    // await page.setInputFiles("input[type='file']", ["images_for_playwright/Vishnu god.png", "images_for_playwright/Krishna.png"])

    let [uploadfiles] = await Promise.all(
        [
            page.waitForEvent("filechooser"),
            page.click("input[type='file']")
        ]
    )
    let ismultiple = uploadfiles.isMultiple();
    console.log(ismultiple);

    uploadfiles.setFiles(["images_for_playwright/Vishnu god.png", "images_for_playwright/Krishna.png"])

    await page.waitForTimeout(2000);


})