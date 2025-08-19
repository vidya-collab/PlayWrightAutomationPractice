// const {test, expect} = require('@playwright/test');          // or below import statement
import { test, expect } from '@playwright/test';

test('Build in locators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const image = page.getByAltText('company-branding');
    await expect(image).toBeVisible();

    
    await page.getByPlaceholder('Username').fill('Admin'); // Fill the name field using placeholder locator

    await page.getByPlaceholder('Password').fill('admin123'); // Fill the password field using placeholder locator

    await page.getByRole('Button', { type: 'Submit' }).click();

    await expect(page.getByText('Time at Work')).toBeVisible();

    const userName = page.locator("//p[@class='oxd-userdropdown-name']");
    
    await expect(userName).toBeVisible();


});