import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('vidya');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('vidya@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
});await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').click();
await page.locator('#loginusername').fill('Swaraa');
await page.locator('#loginusername').press('Tab');
await page.locator('#loginpassword').fill('ajssssjks');
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
await expect(page.getByRole('link', { name: 'About us' })).toBeVisible();
await expect(page.getByRole('link', { name: 'About us' })).toBeVisible();