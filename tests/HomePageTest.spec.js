//@ts-check
import { test, expect } from '@playwright/test';

test('Home title', async ({ page }) => {
  
await page.goto('https://www.demoblaze.com/index.html');

const pageTitle = await page.title();
console.log('page title is:',pageTitle);


await expect(page).toHaveTitle('STORE');

const pageUrl=await page.url();
console.log('page url is:',pageUrl);

// Expect a title "to contain" a substring.
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  
await page.close(); // no need as playwright closes the page automatically after the test ends
  

})