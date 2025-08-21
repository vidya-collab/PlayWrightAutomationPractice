import { test, expect } from '@playwright/test';

test('Take all types of screenshots in Playwright', async ({ page }) => {
  // Navigate to website
  await page.goto('https://playwright.dev/');

  // 1. Viewport screenshot (default) -> only what is visible
  await page.screenshot({ path: 'screenshots/screenshot.png' });

  // 2. Full page screenshot
  await page.screenshot({ path: 'screenshots/fullpage.png', fullPage: true });

  // 3. Element screenshot
  const element = await page.locator('h1');
  await element.screenshot({ path: 'screenshots/element.png' });

  // 4. Screenshot with masking (hide sensitive elements)
  await page.screenshot({
    path: 'screenshots/masked.png',
    mask: [page.locator('text=Get started')],
  });

  // 5. Screenshot with custom clip (specific area)
  await page.screenshot({
    path: 'screenshots/clip.png',
    clip: { x: 0, y: 0, width: 400, height: 300 }
  });

  // 6. Automatically take screenshot on failure
  await expect(page.locator('text=NonExistent')).toBeVisible({
    timeout: 2000
  }).catch(async () => {
    await page.screenshot({ path: 'screenshots/onFailure.png', fullPage: true });
  });

  // 7. Screenshot with different image format
  await page.screenshot({ path: 'screenshots/image.jpeg', type: 'jpeg', quality: 80 });

  // 8. Element screenshot with highlight effect
  const button = page.locator('text=Get started');
  await button.screenshot({ path: 'screenshots/button.png' });
});
