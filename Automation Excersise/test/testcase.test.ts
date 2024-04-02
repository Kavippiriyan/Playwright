import { expect, test } from "@playwright/test"

import Register from "../Register.test";
import Login from "../login.test";


test("register", async ({ page, baseURL }) => {

    const register = new Register(page);

    await page.goto(`${baseURL}`);
    await register.isHomePageVisible()
    await register.signuplogin()
    expect(await page.locator("'New User Signup!'")).toHaveText("New User Signup!")
    await register.Name("lion")
    await register.EmailAddress("lion@gmail.com")
    await register.clicksignup();
    await register.isvisibleEnteraccountinformation();
    await register.title();
    await register.password("Kavi@123");
    await register.day();
    await register.month();
    await register.year();
    await register.newsletter_checkbox();
    await register.firstName("Kavippiriyan");
    await register.lastName("S");
    await register.company("ABC Company");
    await register.address1("138,something");
    await register.address2("138,something");
    await register.state("Tamil Nadu");
    await register.city("Erode");
    await register.zipcode("638502");
    await register.mobile_number("1234567890");
    await register.create_account_button();
    await register.isVisibleAccountcreated();
    await register.click_continue_goHome();
    await register.isusernameVisible();
    await register.DeleteAccount()
    await register.AccountDeletedisVisible()
    await register.continue_Afterdelete_GoHomepage()

})

// test("login", async ({ page, baseURL }) => {
//     await page.goto(`${baseURL}login`);

//     const login = new Login(page);
//     login.EmailAddress("kavi123@gmail.com");
//     login.password("Kavi@123");
//     login.login();
//     console.log(login.checkhomepage());
//     ;
// })