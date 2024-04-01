
import { expect, test } from "../base/pomfixture"

import * as data from "../test-data/shopnow.test-data.json"

// test.use(
//     {
//         browserName: "firefox"
//     }
// )

const Email = "kavi123@gmail.com"
const Password = "password"

test("test1 Register", async ({ page, baseURL, registerpage }) => {


    await page.goto(`${baseURL}route=account/register`)
    await registerpage.firstname(data.firstname)
    await registerpage.lastname(data.lastname)
    await registerpage.Email(data.email)
    await registerpage.Password(data.password)
    await registerpage.CPassword(data.password)
    await registerpage.Telephone(data.phonenumber)
    expect(registerpage.issubcribed()).toBeChecked()
    await registerpage.checkbox()
    await registerpage.continue()

}
)

test("test2 Login", async ({ page, baseURL, loginpage }) => {


    await page.goto(`${baseURL}route=account/login`)
    await loginpage.Email(Email);
    await loginpage.Password(Password)
    await loginpage.loginbutton();
    expect(await page.title()).toBe("My Account")

})

test("test3", async ({ page, baseURL, loginpage, homepage, spcial_page }) => {

    await page.goto(`${baseURL}route=account/login`)
    await loginpage.login(Email, Password);
    await homepage.special_page()
    await spcial_page.continue_shopnow();
    await spcial_page.shopnow();
})