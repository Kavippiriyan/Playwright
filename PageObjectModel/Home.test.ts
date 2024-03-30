import { Page } from "@playwright/test";


export default class Home {
    constructor(public page: Page) {

    }


    async special_page() {
        await this.page.click("(//span[text()='Hot'])[1]")
    }
}