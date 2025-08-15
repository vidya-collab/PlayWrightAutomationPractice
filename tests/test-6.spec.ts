import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'CATEGORIES' }).click();

  await page.getByRole('link', { name: 'Contact' }).click();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('vidya.kushte@gmail.com');
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).click();
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).fill('vidya');
  await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Message:' }).fill('hi');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Sony vaio i7' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();});