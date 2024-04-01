// import { expect, test } from "@playwright/test"
import { expect, test } from "../base/pomfixture"

// import Register from "../PageObjectModel/Register.test"
// import Login from "../PageObjectModel/login.test"
// import Home from "../PageObjectModel/Home.test"
// import Special_page from "../PageObjectModel/special_page.test"



const Email = "kavi123@gmail.com"
const Password = "password"

test("test1 Register", async ({ page, baseURL, registerpage }) => {
    // const register = new Register(page);
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

    //==============================================================================

    await page.goto(`${baseURL}route=account/register`)
    await registerpage.firstname("Kavippiriyan")
    await registerpage.lastname("S")
    await registerpage.Email(Email)
    await registerpage.Password(Password)
    await registerpage.CPassword(Password)
    await registerpage.Telephone("9081726354")
    expect(registerpage.issubcribed()).toBeChecked()
    await registerpage.checkbox()
    await registerpage.continue()

}
)

test("test2 Login", async ({ page, baseURL, loginpage }) => {
    //     const login = new Login(page);

    //     await page.goto(`${baseURL}route=account/login`)
    //     await login.Email(Email);
    //     await login.Password(Password)
    //     await login.loginbutton();
    //     expect(await page.title()).toBe("My Account")
    //==============================================================================


    await page.goto(`${baseURL}route=account/login`)
    await loginpage.Email(Email);
    await loginpage.Password(Password)
    await loginpage.loginbutton();
    expect(await page.title()).toBe("My Account")

})

test("test3", async ({ page, baseURL, loginpage, homepage, spcial_page }) => {
    //     const login = new Login(page);
    //     const home = new Home(page)
    //     const specialpage = new Special_page(page)
    //     await page.goto(`${baseURL}route=account/login`)
    //     await login.login(Email, Password);
    //     await home.special_page()
    //     await specialpage.continue_shopnow();
    //     await specialpage.shopnow();
    //==============================================================================
    // const home = new Home(page)
    // const specialpage = new Special_page(page)
    await page.goto(`${baseURL}route=account/login`)
    await loginpage.login(Email, Password);
    await homepage.special_page()
    await spcial_page.continue_shopnow();
    await spcial_page.shopnow();
})