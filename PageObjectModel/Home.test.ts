import { Page } from "@playwright/test";


export default class Home {
    constructor(public page: Page) {

    }


    async special_page() {
        const special = await this.page.locator("(//a[@href='https://ecommerce-playground.lambdatest.io/index.php?route=product/special'])[2]");
        await special.click()
    }
}