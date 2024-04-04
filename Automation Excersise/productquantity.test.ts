import { Page, expect } from "@playwright/test";


export default class ProductQuantity {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async productdetailslink() {

        await this.page.click("//a[text()=' Products']")
    }
    async clickviewproduct() {
        await this.page.click("(//a[text()='View Product'])[1]")
    }
    async fillquantity() {
        await this.page.locator("//input[@id='quantity']").fill('4')
    }
    async addcart() {
        await this.page.click("(//i[@class='fa fa-shopping-cart'])[2]")
        await this.page.click("//u[text()='View Cart']")
    }
    async quantity_verification() {
        let dress1 = await this.page.locator("//td[@class='cart_price']")
        let dress1_price = await dress1.innerText()
        let trimdress1 = dress1_price.substring(4).trim();
        let convertdress1 = Number(trimdress1)

        let dress1_quan = await this.page.locator("//button[@class='disabled']")
        let dress1_quantity = await dress1_quan.innerText()
        let trimdress1_quantity = dress1_quantity.trim();
        let convertdress1_quantity = Number(trimdress1_quantity)

        let dress1_t = await this.page.locator("//p[@class='cart_total_price']")
        let dress1_total = await dress1_t.innerText()
        let trimdress1_total = dress1_total.substring(4).trim();
        let convertdress1_total = Number(trimdress1_total)

        if ((convertdress1 * convertdress1_quantity) == convertdress1_total) {
            console.log("dress1 verified");
            console.log(convertdress1 * convertdress1_quantity);
            console.log(convertdress1_total);


        }
        else {
            console.log("dress1 not verified");

        }
    }

}