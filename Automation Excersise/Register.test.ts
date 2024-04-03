

import { Page, expect } from "@playwright/test"

export default class Register {
     constructor(public page: Page) {
     }
     async isHomePageVisible() {
          expect(await this.page.locator("//a[text()=' Home']")).toContainText("Home")
     }

     async signuplogin() {
          await this.page.click("//a[text()=' Signup / Login']")
     }

     async Name(name: string) {

          await this.page.locator("//input[@name='name']").fill(name)
     }

     async EmailAddress(email: string) {

          await this.page.locator("(//input[@name='email'])[2]").fill(email)

     }

     async clicksignup() {

          await Promise.all(
               [
                    this.page.waitForNavigation({ waitUntil: "load" }),
                    await this.page.click("//button[text()='Signup']")
               ]
          )
     }

     async isvisibleEnteraccountinformation() {
          expect(await this.page.locator("//b[text()='Enter Account Information']")).toContainText("Enter Account Information")
     }
     async title() {
          await this.page.locator("//div[@id='uniform-id_gender1']").check()
     }
     async password(password: string) {
          await this.page.type("//input[@id='password']", password)
     }

     async day() {
          await this.page.selectOption("//select[@id='days']", [{
               label: "9"
          }])
     }
     async month() {
          await this.page.selectOption("//select[@id='months']", [{
               label: "October"
          }])
     }
     async year() {
          await this.page.selectOption("//select[@id='years']", [{
               value: "2001"
          }])
     }
     async newsletter_checkbox() {
          await this.page.locator("//input[@id='newsletter']").check();
     }

     async firstName(name: string) {

          await this.page.locator("//input[@id='first_name']").fill(name)
     }
     async lastName(name: string) {

          await this.page.locator("//input[@id='last_name']").fill(name)
     }
     async company(company: string) {

          await this.page.locator("//input[@id='company']").fill(company)
     }
     async address1(address1: string) {

          await this.page.locator("//input[@id='address1']").fill(address1)
     }
     async address2(address2: string) {

          await this.page.locator("//input[@id='address2']").fill(address2)
     }
     async state(state: string) {

          await this.page.locator("//input[@id='state']").fill(state)
     }
     async city(city: string) {

          await this.page.locator("//input[@id='city']").fill(city)
     }
     async zipcode(zipcode: string) {

          await this.page.locator("//input[@id='zipcode']").fill(zipcode)
     }
     async mobile_number(mobile_number: string) {

          await this.page.locator("//input[@id='mobile_number']").fill(mobile_number)
     }
     async create_account_button() {

          await Promise.all(
               [
                    this.page.waitForNavigation({ waitUntil: "load" }),
                    await this.page.locator("//button[@data-qa='create-account']").click()
               ]
          )

     }
     async isVisibleAccountcreated() {
          expect(await this.page.locator("//b[text()='Account Created!']")).toContainText("Account Created!")
     }

     async click_continue_goHome() {
          await this.page.locator("//a[text()='Continue']").click();
     }
     async isusernameVisible() {
          expect(await this.page.locator("//b[text()='lion']")).toContainText("lion")
     }

     async DeleteAccount() {
          await this.page.locator("//a[text()=' Delete Account']").click();
     }
     async AccountDeletedisVisible() {
          expect(await this.page.locator("//b[text()='Account Deleted!']")).toContainText("Account Deleted!")
     }
     async continue_Afterdelete_GoHomepage() {
          expect(await this.page.locator("//a[text()='Continue']").click());
     }
     async Error_message_for_Register() {
          expect(await this.page.locator("//p[text()='Email Address already exist!']")).toContainText("Email Address already exist!")
     }
}
}