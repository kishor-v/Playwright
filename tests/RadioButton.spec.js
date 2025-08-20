const { test, expect } = require('@playwright/test');

test('Radio button', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator("//input[@id='male']").check();
    await page.check("//input[@id='male']");

    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();  //first checks wheather checked or not that value will retrun to next statement
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})