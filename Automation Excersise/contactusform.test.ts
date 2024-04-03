import { Page, expect } from "@playwright/test";


export default class Contact {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']").isVisible());
    }
    async signuplogin() {
        await this.page.click("//a[text()=' Contact us']")
    }

    async GETINTOUCHisvisible() {
        expect(await this.page.locator("//h2[text()='Get In Touch']").isVisible());
    }


    async name(name: string) {

        const email_locate = await this.page.locator("//input[@name='name']")

        await email_locate.fill(name)
    }
    async subject(email: string) {

        const email_locate = await this.page.locator("//input[@name='subject']")

        await email_locate.fill(email)
    }
    async EmailAddress(email: string) {

        const email_locate = await this.page.locator("//input[@name='email']")

        await email_locate.fill(email)
    }
    async message(email: string) {

        const email_locate = await this.page.locator("//textarea[@name='message']")

        await email_locate.fill(email)
    }
}