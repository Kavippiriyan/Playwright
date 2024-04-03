

import { expect, Page } from "@playwright/test";

export default class TestcasePage {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
    }
    async testcaselink() {
        await this.page.click("//a[text()=' Test Cases']")
    }
    async testcasepage() {
        expect(await this.page.locator("//b[text()='Test Cases']")).toContainText("Test Cases")
    }
}