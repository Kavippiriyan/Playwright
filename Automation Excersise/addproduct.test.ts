import { Page, expect } from "@playwright/test";


export default class AddCart {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async productdetailslink() {

        await this.page.click("//a[text()=' Products']")
    }
    async Mousehoverandclick() {

        await this.page.hover("(//div[@class='productinfo text-center'])[1]")
        await this.page.click("(//a[text()='Add to cart'])[1]")
        await this.page.click("//button[text()='Continue Shopping']")
        await this.page.click("(//a[text()='Add to cart'])[3]")
        await this.page.click("//u[text()='View Cart']")

    }
    async validatingthecarts() {
        let dress1 = await this.page.locator("(//p[text()='Rs. 500'])[1]")
        let dress1_t = await this.page.locator("(//p[text()='Rs. 500'])[2]")
        let dress2 = await this.page.locator("(//p[text()='Rs. 400'])[1]")
        let dress2_t = await this.page.locator("(//p[text()='Rs. 400'])[2]")
        let dress1_quan = await this.page.locator("(//button[text()='1'])[1]")
        let dress2_quan = await this.page.locator("(//button[text()='1'])[2]")

        let dress1_price = await dress1.innerText()
        let trimdress1 = dress1_price.substring(4).trim();
        let convertdress1 = Number(trimdress1)
        console.log(convertdress1);

        let dress2_price = await dress2.innerText()
        let trimdress2 = dress2_price.substring(4).trim();
        let convertdress2 = Number(trimdress2)
        console.log(convertdress2);

        let dress1_quantity = await dress1_quan.innerText()
        let trimdress1_quantity = dress1_quantity.trim();
        let convertdress1_quantity = Number(trimdress1_quantity)
        console.log(convertdress1_quantity);

        let dress2_quantity = await dress2_quan.innerText()
        let trimdress2_quantity = dress2_quantity.trim();
        let convertdress2_quantity = Number(trimdress2_quantity)
        console.log(convertdress2_quantity);

        let dress1_total = await dress1_t.innerText()
        let trimdress1_total = dress1_total.substring(4).trim();
        let convertdress1_total = Number(trimdress1_total)
        console.log(convertdress1_total);

        let dress2_total = await dress2_t.innerText()
        let trimdress2_total = dress2_total.substring(4).trim();
        let convertdress2_total = Number(trimdress2_total)
        console.log(convertdress2_total);

        if ((convertdress1 * convertdress1_quantity) == convertdress1_total) {
            console.log("dress1 verified");

        }
        else {
            console.log("dress1 not verified");

        }
        if ((convertdress2 * convertdress2_quantity) == convertdress2_total) {
            console.log("dress2 verified");

        }
        else {
            console.log("dress1 not verified");

        }

        // console.log((convertdress1));
        // console.log((convertdress1_quantity));
        // console.log((convertdress1_total));


    }

}