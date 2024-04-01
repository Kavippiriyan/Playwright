
import { expect, test } from "../base/pomfixture"

import * as data from "../test-data/shopnow.test-data.json"



const Email = "kavi123@gmail.com"
const Password = "password"

test("test1 Register", async ({ page, baseURL, registerpage }) => {


    await page.goto(`${baseURL}route=account/register`)
    await page.waitForTimeout(1000)
    await registerpage.firstname(data.firstname)
    await registerpage.lastname(data.lastname)
    await registerpage.Email(data.email)
    await registerpage.Password(data.password)
    await registerpage.CPassword(data.password)
    await registerpage.Telephone(data.phonenumber)
    expect(registerpage.issubcribed()).toBeChecked()
    await registerpage.checkbox()
    await page.waitForTimeout(1000)
    await registerpage.continue()
    await page.waitForTimeout(1000)

}
)

test("test2 Login", async ({ page, baseURL, loginpage }) => {


    await page.goto(`${baseURL}route=account/login`)
    await page.waitForTimeout(1000)
    await loginpage.Email(Email);
    await loginpage.Password(Password)
    await loginpage.loginbutton();
    await page.waitForTimeout(1000)
    expect(await page.title()).toBe("My Account")

})

test("test3", async ({ page, baseURL, loginpage, homepage, spcial_page }) => {

    await page.goto(`${baseURL}route=account/login`)
    await page.waitForTimeout(1000)
    await loginpage.login(Email, Password);
    await page.waitForTimeout(1000)
    await homepage.special_page()
    await page.waitForTimeout(1000)
    await spcial_page.continue_shopnow();
    await page.waitForTimeout(1000)
    await spcial_page.shopnow();
    await page.waitForTimeout(1000)
})