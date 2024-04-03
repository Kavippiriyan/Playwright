import { Page, expect } from "@playwright/test";


export default class ContactUs {
    constructor(public page: Page) {

    }
    async isHomePageVisible() {
        expect(await this.page.locator("//a[text()=' Home']").isVisible());
    }
    async clickcontactus() {
        await this.page.click("//a[text()=' Contact us']")
    }

    async GETINTOUCHisvisible() {
        expect(await this.page.locator("//h2[text()='Get In Touch']").isVisible());
    }


    async name(name: string) {

        const email_locate = await this.page.locator("//input[@name='name']")

        await email_locate.fill(name)
    }
    async subject(email: string) {

        const email_locate = await this.page.locator("//input[@name='subject']")

        await email_locate.fill(email)
    }
    async EmailAddress(email: string) {

        const email_locate = await this.page.locator("//input[@name='email']")

        await email_locate.fill(email)
    }
    async message(email: string) {

        const email_locate = await this.page.locator("//textarea[@name='message']")

        await email_locate.fill(email)
    }

    async uploadfile() {
        const [uploadfiles] = await Promise.all(
            [
                this.page.waitForEvent("filechooser"),
                this.page.click("input[type='file']")
            ]
        )
        uploadfiles.setFiles("images_for_playwright/Krishna.png")
    }
    async Submit() {

        this.page.click("//input[@value='Submit']")
    }

    async alert() {
        this.page.on("dialog", async (alert) => {
            const alertmsg = alert.message();
            console.log(alertmsg);

            alert.accept();

        })
    }
    async submittedmsg() {
        expect(await this.page.locator("(//div[text()='Success! Your details have been submitted successfully.'])[1]").isVisible());
    }

    async Homebutton() {
        await this.page.click("//span[text()=' Home']")
    }
    async ishomepage() {
        expect(this.page.url()).toEqual("https://automationexercise.com/")
    }
}