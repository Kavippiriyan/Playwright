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

        let text = 'Rs. 500'
        for (let i = 0; i < 2; i++) {
            let paracontent = await this.page.textContent(`(//p[text()='${text}'])[${i}]`)
            expect(paracontent).toEqual(text)
        }
        let text1 = 'Rs. 400'
        for (let i = 0; i < 2; i++) {
            let paracontent1 = await this.page.textContent(`(//p[text()='${text}'])[${i}]`)
            expect(paracontent1).toEqual(text1)
        }
        let text2 = '1'
        for (let i = 0; i < 2; i++) {
            let paracontent2 = await this.page.textContent(`(//p[text()='${text}'])[${i}]`)
            expect(paracontent2).toEqual(text2)
        }
    }

}