import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator('.SDkEP').click();
  await page.getByLabel('Search', { exact: true }).fill('god vishnu photos');
  await page.getByLabel('Google Search').first().click();
  await page.getByRole('button', { name: 'Beautiful God Vishnu | Lord' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Visit Pinterest').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'the god is holding a golden' }).click();
  await page1.locator('[data-test-id="full-page-signup-close-button"]').getByLabel('close').click();
});