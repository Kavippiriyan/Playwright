import { expect, Page } from "@playwright/test";

export default class Subscription {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }

    async scroll_tosubscription() {

        // await this.page.evaluate(() => window.scrollBy(0, document.body.scrollHeight))
        // await this.page.waitForTimeout(2000);

        // await this.page.locator("//input[@id='susbscribe_email']").type("Hello")
        // await this.page.waitForTimeout(2000);

        let scrollelement = await this.page.locator("//h2[text()='Subscription']")
        await scrollelement.scrollIntoViewIfNeeded();

        expect(scrollelement).toContainText("Subscriptio")
    }

    async fillsubscribeemail() {
        await this.page.locator("//input[@id='susbscribe_email']").type("Kavi@gmail.com")
    }
    async clicktosubscribe() {
        await this.page.locator("//button[@id='subscribe']").click();
    }
    async subscribedmsg() {
        expect(await this.page.locator("//div[text()='You have been successfully subscribed!']")).toContainText("You have been successfully subscribed!")
    }

}