

import { Page } from "@playwright/test";


export default class Login {

    constructor(public page: Page) {

    }

    async login(Email: string, Password: string) {

        await this.Email(Email);
        await this.Password(Password)
        await this.loginbutton();
    }
    async Email(Email: string) {
        await this.page.locator("input[name='email']").type(Email)
    }
    async Password(Password: string) {
        await this.page.locator("input[name='password']").type(Password)
    }
    async loginbutton() {
        await this.page.locator("//input[@type='submit']").click();
    }
}