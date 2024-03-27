

import { test } from "@playwright/test"


test("dropdown", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");


    await page.selectOption("#select",
    {
        label:"India"
    })
})