import { test } from "./myfixture"

test("fixture demo", async ({ age, email }) => {
    console.log(age, email.toUpperCase());

})