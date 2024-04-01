import { test as mytest } from "@playwright/test"

type Kavippiriyan =
    {
        age: number,
        email: string
    }

const myfixturetest = mytest.extend<Kavippiriyan>(
    {
        age: 22,
        email: "kavi123@gmail.com"
    }
)

export const test = myfixturetest