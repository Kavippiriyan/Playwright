

import { expect, test } from "@playwright/test"

test("", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    const input = page.locator("input[id='email']");

    input.scrollIntoViewIfNeeded()

    // const get = input.getAttribute("placeholder");

    // expect(input).toHaveAttribute("placeholder","Email address or phone number")
    // expect(input).toHaveAttribute("placeholder", "Email address or phone numbers")

    console.log("Before enter the value : ",await input.inputValue());

    await input.type("9025564644");
    console.log("After enter the value: ",await input.inputValue());
    


    
})