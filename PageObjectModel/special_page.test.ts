import { Page } from "@playwright/test";


export default class Special_page {
    constructor(public page: Page) {

    }


    async continue_shopnow() {
        await this.page.click("'Continue'")
    }

    async shopnow() {
        await this.page.click(("//a[@class='btn btn-lg btn-outline-primary ml-lg-auto flex-shrink-0']"))
    }
}