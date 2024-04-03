

import { expect, Page } from "@playwright/test";

export default class ProductDetailsPage {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async productdetailslink() {
        
        await this.page.click("//a[text()=' Products']")
    }
    async productpagedetailsisvisible() {
        expect(await this.page.locator("//img[@id='sale_image']").isVisible());//**** */
        expect(await this.page.locator("//div[@class='col-sm-3']").isVisible());///  doubbbttt
    }
    async clickviewproduct() {
        await this.page.click("(//a[text()='View Product'])[1]")
    }
    async productinformationvisible() {
        expect(await this.page.locator("//div[@class='product-information']").isVisible());
        expect(await this.page.locator("//h2[text()='Blue Top']")).toContainText("Blue Top");
        expect(await this.page.locator("//span[text()='Rs. 500']")).toContainText("Rs. 500")
        expect(await this.page.locator("//p[text()=' In Stock']")).toContainText(" In Stock")
        expect(await this.page.locator("//p[text()=' New']")).toContainText("New")
        expect(await this.page.locator("//p[text()=' Polo']")).toContainText(" Polo")
    }

}