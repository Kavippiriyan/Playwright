import { expect, Page } from "@playwright/test";

export default class CartSubscription {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async click_cart() {
        await this.page.locator("//a[text()=' Cart']").click();
    }

    async scroll_tosubscription() {

        await this.page.evaluate(() => {
            window.scrollBy(0, document.body.scrollHeight)
        })
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