import { expect, Page } from "@playwright/test";

export default class SearchProduct {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async productdetailslink() {

        await this.page.click("//a[text()=' Products']")
    }
    async allproductspage() {
        expect(await this.page.locator("//h2[text()='All Products']")).toContainText("All Products")
    }

    async searchbox() {
        await this.page.locator("//input[@id='search_product']").fill("T-shirts")
        await this.page.click("//button[@id='submit_search']")
    }
    async searchedproducttextvisibility() {
        expect(await this.page.locator("//h2[text()='Searched Products']")).toContainText("Searched Products")


    }
    async searchedProductVisibility() {
        let element = await this.page.locator("//div[@class='product-image-wrapper']");
        let textContent = await element.textContent();
        expect(textContent?.toLowerCase().includes("t-shirts")).toBeTruthy(); // Assertion method added
        console.log("Test case is completed");
    }
}