
// const {test, expect} = require('@playwright/test');          // or below import statement

import { test, expect } from '@playwright/test';

test('Locator', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html', {
    waitUntil: 'domcontentloaded',
    timeout: 45_000
  });

await page.click("//a[@id='login2']");                                     //xpath//click on login button

await page.fill('#loginusername', 'Swaraa');                             //css selector // fill username 
// await page.fill("//input[@id='loginusername']", 'Swaraa');            //xpath   // fill username using xpath  

await page.fill('#loginpassword', 'swaraa@123');  //css selector

// Alternatively, you can use xpath as well

//await page.fill("//input[@id='loginpassword']", 'swaraa@123');            //xpath // fill password using xpath

await page.click("//button[normalize-space()='Log in']");                //xpath // click on login button in login modal

const logoutlink = page.locator("//a[@id='logout2']"); 

await expect(logoutlink).toBeVisible();                                 // verify logout link is visible after login

  
})