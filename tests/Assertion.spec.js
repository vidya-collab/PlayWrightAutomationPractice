import {test, expect} from '@playwright/test';
//or 
//const {test, expect} = require('@playwright/test');

test('Assertion Example', async ({ page }) => {
  // Navigate to the page
    await page.goto('https://demo.nopcommerce.com/register');   

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
 
    const computers = page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']");
    await expect(computers).toBeVisible();

    const searchbar = page.locator('#small-searchterms');
    await expect(searchbar).toBeEnabled();

    const registerButton = page.locator('#register-button');
    await expect(registerButton).toBeVisible();

    const radiobutton = page.locator('#gender-male');
    await radiobutton.click();
    await expect(radiobutton).toBeChecked();


        const newsletterCheckbox = page.locator('#Newsletter');
        await expect(newsletterCheckbox).toBeChecked();
    
        await expect(registerButton).toHaveAttribute('type','submit');   
    
        await expect(registerButton).toHaveText('Register');
        await expect(registerButton).toContainText('Reg');

        const emailField = page.locator('#Email');
        await emailField.fill('vidya.kushte@gmail.com');
        await expect(emailField).toHaveValue('vidya.kushte@gmail.com');     


        await expect(registerButton).toHaveClass('button-1 register-next-step-button');
        await expect(registerButton).toHaveCount(1);
        await expect(registerButton).toHaveId('register-button');
        await expect(registerButton).toHaveCSS('color','rgb(255, 255, 255)');
        await expect(registerButton).toHaveCSS('background-color','rgb(74, 178, 241)');
        await expect(registerButton).toHaveCSS('font-size','15px');
        await expect(registerButton).toHaveCSS('text-align','center');
        await expect(registerButton).toHaveCSS('text-transform','uppercase');  
        
        




    });


//mostly used assertions in playwright:

// 1) expect(page).toHaveURL()   Page has URL
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute inside bracket (attributeName, attributeValue)
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length mostly in dropdown
// 11) expect(locator).toHaveId()  Element has id
// 12) expect(locator).toHaveClass()  Element has class
// 13) expect(locator).toHaveCSS()  Element has CSS property (propertyName, propertyValue)
// 14) expect(locator).toHaveAttribute('type', 'submit')  Element has attribute 'type' with value 'submit'

// Note: In the above assertions, the values inside expect() are locators or page objects.  


//inside () value should be in single quotes or double quotes.
