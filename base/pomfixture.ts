import { test as basetest } from "@playwright/test"

import Regiser from "../PageObjectModel/Register.test"
import Login from "../PageObjectModel/login.test"
import Home from "../PageObjectModel/Home.test"
import special_page from "../PageObjectModel/special_page.test"
import Register from "../PageObjectModel/Register.test"


type pages =
    {
        registerpage: Register,
        loginpage: Login,
        homepage: Home,
        spcial_page: special_page
    }

const testpages = basetest.extend<pages>
    (
        {
            registerpage: async ({ page }, use) => {
                await use(new Register(page))

            },

            loginpage: async ({ page }, use) => {
                await use(new Login(page))

            },

            homepage: async ({ page }, use) => {
                await use(new Home(page))

            },

            spcial_page: async ({ page }, use) => {
                await use(new special_page(page))

            }
        }
    )

export const test = testpages
export const expect = testpages.expect