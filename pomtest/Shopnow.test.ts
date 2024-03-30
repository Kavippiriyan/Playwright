import { expect, test } from "@playwright/test"

import Register from "../PageObjectModel/Register.test"
import Login from "../PageObjectModel/login.test"
import Home from "../PageObjectModel/Home.test"
import Special_page from "../PageObjectModel/special_page.test"



const Email = "kavi123@gmail.com"
const Password = "password"

// test("test1", async ({ page, baseURL }) => {
//     const register = new Register(page);
//     await page.goto(`${baseURL}route=account/register`)
//     await register.firstname("Kavippiriyan")
//     await register.lastname("S")
//     await register.Email(Email)
//     await register.Password(Password)
//     await register.CPassword(Password)
//     await register.Telephone("9081726354")
//     expect(register.issubcribed()).toBeChecked()
//     await register.checkbox()
//     await register.continue()
// }
// )

test("test2", async ({ page, baseURL }) => {
    const login = new Login(page);

    await page.goto(`${baseURL}route=account/login`)
    await login.Email(Email);
    await login.Password(Password)
    await login.loginbutton();

})