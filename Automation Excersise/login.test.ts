
import { Page, expect } from "@playwright/test"

export default class Login {


    constructor(public page: Page) {

    }
    async EmailAddress(email: string) {

        await this.page.locator("(//input[@name='email'])[1]").fill(email)

    }

    async password(password: string) {
        await this.page.fill("//input[@name='password']", password)
    }

    async login() {


        this.page.locator("//button[text()='Login']").click()

    }
    async checkhomepage() {


        expect(await this.page.locator("//a[@href='/logout']").isVisible())

    }
}