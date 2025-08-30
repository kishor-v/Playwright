const { test, expect } = require('@playwright/test');

test("AutoSuggetionDropDwon", async ({page})=> {

    await page.goto('https://www.redbus.in/');

    await page.waitForTimeout(3000);
    await page.locator("//div[contains(text(),'From')]").fill('Anand Roa Circle');
    await page.waitForTimeout(3000);

    await page.waitForTimeout(5000);
})