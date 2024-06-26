
import { Page, expect } from "@playwright/test"

export default class Login {


    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']").isVisible());
    }


    async signuplogin() {
        await this.page.click("//a[text()=' Signup / Login']")
    }

    async Login_into_your_account_Visible() {
        expect(await this.page.locator("//h2[text()='Login to your account']")).toContainText("Login to your account");
    }

    async EmailAddress(email: string) {

        const email_locate = await this.page.locator("(//input[@placeholder='Email Address'])[1]")

        await email_locate.fill(email)


    }

    async password(password: string) {

        const password_locate = await this.page.locator("//input[@name='password']")
        await password_locate.fill(password)
    }

    async login() {


        this.page.locator("//button[text()='Login']").click()

    }
    async isusernameVisible() {
        expect(await this.page.locator("//b[text()='lion']").isVisible())
    }
    async DeleteAccount() {
        await this.page.locator("//a[text()=' Delete Account']").click();
    }
    async AccountDeletedisVisible() {
        expect(await this.page.locator("//b[text()='Account Deleted!']")).toHaveText("Account Deleted!");
    }
    async Error_message() {
        expect(await this.page.locator("//p[text()='Your email or password is incorrect!']").isVisible());
    }

}