

import { Page } from "@playwright/test"

export default class Register {
     constructor(public page: Page) {

     }

     async Name(name: string) {

          await this.page.locator("//input[@name='name']").fill(name)
     }
     async EmailAddress(email: string) {

          await this.page.locator("(//input[@name='email'])[2]").fill(email)

     }
     async signup() {

          await this.page.click("//button[text()='Signup']")
     }

}