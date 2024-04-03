import { expect, test } from "@playwright/test"

import Register from "../Register.test";
import Login from "../login.test";
import Logout from "../logout.test";
import ContactUs from "../contactusform.test";
import TestcasePage from "../testcasepage.test";
import ProductDetailsPage from "../productdetail.test";
import Subscription from "../subscription.test";


// test("register test1", async ({ page, baseURL }) => {

//     const register = new Register(page);

//     await page.goto(`${baseURL}`);
//     await register.isHomePageVisible()
//     await register.signuplogin()
//     expect(await page.locator("'New User Signup!'")).toHaveText("New User Signup!")
//     await register.Name("lion")
//     await register.EmailAddress("lion@gmail.com")
//     await register.clicksignup();
//     await register.isvisibleEnteraccountinformation();
//     await register.title();
//     await register.password("Kavi@123");
//     await register.day();
//     await register.month();
//     await register.year();
//     await register.newsletter_checkbox();
//     await register.firstName("Kavippiriyan");
//     await register.lastName("S");
//     await register.company("ABC Company");
//     await register.address1("138,something");
//     await register.address2("138,something");
//     await register.state("Tamil Nadu");
//     await register.city("Erode");
//     await register.zipcode("638502");
//     await register.mobile_number("1234567890");
//     await register.create_account_button();
//     await register.isVisibleAccountcreated();
//     await register.click_continue_goHome();
//     await register.isusernameVisible();
// await register.DeleteAccount()
// await register.AccountDeletedisVisible()
// await register.continue_Afterdelete_GoHomepage()

// })

// test("login test2", async ({ page, baseURL }) => {
//     const login = new Login(page);
//     await page.goto(`${baseURL}`);
//     await login.isHomePageVisible();
//     await login.signuplogin();
//     await login.Login_into_your_account_Visible();
//     await login.EmailAddress("lion@gmail.com");
//     await login.password("Kavi@123");
//     await login.login();
//     await login.isusernameVisible();
//     await login.DeleteAccount();
//     await login.AccountDeletedisVisible();
// })

// test("Invalid email,password login test3", async ({ page, baseURL }) => {
//     const login = new Login(page);
//     await page.goto(`${baseURL}`);
//     await login.isHomePageVisible();
//     await login.signuplogin();
//     await login.Login_into_your_account_Visible();
//     await login.EmailAddress("lion@gmail.com");
//     await login.password("Kavi@123");
//     await login.login();
//     await login.isusernameVisible();
//     login.Error_message()
// })

// test("logout test4", async ({ page, baseURL }) => {
//     const logut = new Logout(page);
//     await page.goto(`${baseURL}`);
//     await logut.isHomePageVisible();
//     await logut.signuplogin();
//     await logut.Login_into_your_account_Visible();
//     await logut.EmailAddress("lion@gmail.com");
//     await logut.password("Kavi@123");
//     await logut.login();
//     await logut.isusernameVisible();
//     await logut.Login_into_your_account_Visible()

// })


// test("Email alreday exist  test5", async ({ page, baseURL }) => {

//     const register = new Register(page);

//     await page.goto(`${baseURL}`);
//     await register.isHomePageVisible()
//     await register.signuplogin()
//     expect(await page.locator("'New User Signup!'")).toHaveText("New User Signup!")
//     await register.Name("lion")
//     await register.EmailAddress("lll@gmail.com")
//     await register.clicksignup();
//     await register.Error_message_for_Register()

// })

// test("ContactUs test6", async ({ page, baseURL }) => {
//     const contactus = new ContactUs(page);
//     await page.goto(`${baseURL}`);
//     await contactus.isHomePageVisible();
//     await contactus.clickcontactus();
//     await contactus.name("lion");
//     await contactus.EmailAddress("lion@gmail.com");
//     await contactus.subject("Greet");
//     await contactus.message("Good Morning!");
//     await contactus.uploadfile();
//     await contactus.Submit();
//     await contactus.alert();
//     await contactus.submittedmsg();
//     await contactus.Homebutton();
//     await contactus.ishomepage();
// })


// test("logout test7", async ({ page, baseURL }) => {
//     const testcasepage = new TestcasePage(page);
//     await page.goto(`${baseURL}`);
//     await testcasepage.isHomePageVisible();
//     await testcasepage.testcaselink();
//     await testcasepage.testcasepage();

// })
// test("login test8", async ({ page, baseURL }) => {
//     const productdetail = new ProductDetailsPage(page);
//     await page.goto(`${baseURL}`);
//     await productdetail.isHomePageVisible();
//     await productdetail.productdetailslink()
//     await productdetail.productpagedetailsisvisible()
//     await productdetail.clickviewproduct()
//     await productdetail.productinformationvisible()

// })

test("login test8", async ({ page, baseURL }) => {
    const subscription = new Subscription(page);
    await page.goto(`${baseURL}`);
    await subscription.isHomePageVisible();
    await subscription.scroll_tosubscription()
    await subscription.fillsubscribeemail()
    await page.waitForTimeout(2000);
    await subscription.clicktosubscribe();
    await subscription.subscribedmsg();

})