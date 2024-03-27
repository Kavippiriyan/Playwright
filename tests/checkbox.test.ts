

import { chromium, expect, test } from "@playwright/test"

test("checkbox", async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    let checkbox = page.locator("input[class='Automation']")
    await page.waitForTimeout(5000);
    expect(checkbox).not.toBeChecked();
    // await page.waitForTimeout(5000);
    checkbox.check();
    await page.waitForTimeout(5000);
    expect(checkbox).toBeChecked();


})