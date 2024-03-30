
import { Page } from "@playwright/test";


export default class Register {
    constructor(public page: Page) {

    }

    async firstname(firstname: string) {
        await this.page.locator("input[name='firstname']").type(firstname)
    }
    async lastname(lastname: string) {
        await this.page.locator("input[name='lastname']").type(lastname)
    }
    async Email(Email: string) {
        await this.page.locator("input[name='email']").type(Email)
    }
    async Telephone(Telephone: string) {
        await this.page.locator("input[name='telephone']").type(Telephone)
    }
    async Password(Password: string) {
        await this.page.locator("input[name='password']").type(Password)
    }
    async CPassword(CPassword: string) {
        await this.page.locator("input[name='confirm']").type(CPassword)
    }
    issubcribed() {
        return this.page.locator("//label[text()='No']")
    }
    async checkbox() {
        await this.page.locator("//label[@for='input-agree']").click()
    }
    async continue() {
        await Promise.all(
            [
                this.page.waitForNavigation({ waitUntil: "networkidle" }),
                this.page.locator("//input[@type='submit']").click(),

            ]
        )
    }

}