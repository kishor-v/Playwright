const { test,expect } = require('@playwright/test');

test('Input file', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Input Box
    

    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeVisible();

    //fill the details
    //await page.locator("//input[@id='name']").fill('Kishor');
    await page.fill("//input[@id='name']", 'kishor');

    //For waiting some time
    await page.waitForTimeout(5000);
})