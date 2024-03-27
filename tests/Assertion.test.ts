

import { expect, test } from "@playwright/test"

test("", async ({ page }) => {
    // await page.goto("https://www.facebook.com/");

    // const input = page.locator("input[id='email']");

    // input.scrollIntoViewIfNeeded()

    // const get = input.getAttribute("placeholder");

    // expect(input).toHaveAttribute("placeholder","Email address or phone number")
    // expect(input).toHaveAttribute("placeholder", "Email address or phone numbers")

    // console.log("Before enter the value : ",await input.inputValue());

    // await input.type("9025564644");
    // console.log("After enter the value: ",await input.inputValue());


    //==================================================================================

    // calculator

    page.goto("https://www.google.com/search?q=calculator&rlz=1C1ONGR_enIN1103IN1103&oq=calcul&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyBggBEEUYOTINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIKCAkQABixAxiABKgCCLACAQ&sourceid=chrome&ie=UTF-8")



    await page.waitForTimeout(5000);
    let num1 = await page.locator("'5'");
    let operator = await page.locator("'+'")
    let num2 = await page.locator("'5'");
    let equal = await page.locator("'='")
    let value = await page.locator("input[id='cwos']")



    num1.click()
    await page.waitForTimeout(5000);
    operator.click()
    await page.waitForTimeout(5000);
    num2.click()
    await page.waitForTimeout(5000);
    equal.click()
    await page.waitForTimeout(5000);

    let number1 = 5
    let number2 = 5
    let expect_result = number1 + number2

    expect(value).toHaveText("" + expect_result)











})