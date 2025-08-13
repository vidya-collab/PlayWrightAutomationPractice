const {test, expect} = require('@playwright/test'); 

test('Locate Multiple Elements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html', {
    waitUntil: 'domcontentloaded',
    timeout: 45_000
  });

    const links = await page.$$('a');

    for (const link of links)
    {
        const linktext = await link.textContent();
        console.log(linktext);
    }   

 const products = await page.$$(//div[@id='tbodyid']//div//div/a);

    console.log('Total number of products:', products.length);

    // Loop through each product and log its text content

 for (const product of products)
    {
        const producttext = await product.textContent();
        console.log(producttext);
    }

})