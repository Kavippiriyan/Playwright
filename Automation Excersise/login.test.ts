
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
        expect(await this.page.locator("//h2[text()='Login to your account']").isVisible());
    }

    async EmailAddress(email: string) {

        await this.page.fill("(//input[@name='email'])[1]", email)

    }

    async password(password: string) {
        await this.page.fill("//input[@name='password']", password)
    }

    async login() {


        this.page.locator("//button[text()='Login']").click()

    }
    async isusernameVisible() {
        expect(await this.page.locator("//b[text()='lion']")).toHaveText("lion")
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