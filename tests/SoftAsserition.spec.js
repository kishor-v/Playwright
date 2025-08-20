const { test, expect } = require('@playwright/test');

test('Soft assrtion', async ({page})=> {

     await page.goto('https://demoblaze.com/index.html');

    //Hard assertion
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(page.locator('#nava')).toBeVisible();

    //Soft assertion
    await expect.soft(page).toHaveTitle('STORE1234');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('#nava')).toBeVisible();
})