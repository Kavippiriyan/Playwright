import { Page } from "@playwright/test";


export default class Special_page {
    constructor(public page: Page) {

    }


    async continue_shopnow() {
        await this.page.click("'Continue'")
    }

    async shopnow() {
        await this.page.click(("//a[text()='SHOP NOW'])[1]"))
    }
}