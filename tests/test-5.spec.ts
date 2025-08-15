import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'Home (current)' })).toBeVisible();
  await expect(page.locator('#navbarExample')).toContainText('Contact');
  await expect(page.locator('#narvbarx')).toMatchAriaSnapshot(`
    - navigation:
      - link "PRODUCT STORE":
        - /url: index.html
        - img
      - list:
        - listitem:
          - link "Home (current)":
            - /url: index.html
        - listitem:
          - link "Contact":
            - /url: "#"
        - listitem:
          - link "About us":
            - /url: "#"
        - listitem:
          - link "Cart":
            - /url: cart.html
        - listitem:
          - link "Log in":
            - /url: "#"
        - listitem
        - listitem
        - listitem:
          - link "Sign up":
            - /url: "#"
      - list:
        - listitem
        - listitem
        - listitem
<<<<<<< HEAD
      - img "Second slide"
=======
      - img "First slide"
>>>>>>> SNAPSHOT
      - button "Previous"
      - button "Next"
<<<<<<< HEAD
    `);
=======
  `);
>>>>>>> SNAPSHOT
});