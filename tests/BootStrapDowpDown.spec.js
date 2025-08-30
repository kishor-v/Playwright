const { test, expect } = require('@playwright/test');

test('Bootstrop DropDown', async ({page})=> {

    await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');

    await page.locator("").click();

    await page.waitForTimeout(5000);
})