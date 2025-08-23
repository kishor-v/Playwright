const { test, expect } = require('@playwright/test');

test('Handle Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Handle Dropdown
    //await page.locator('//select[@id="country"]').selectOption({label : 'Japan'}); //lable  or 
    await page.locator('//select[@id="country"]').selectOption('Japan');//visiable text

    const opetions = await page.locator("//select[@id='country'] option");
    await expect(opetions).toHaveCount(10);

    await page.waitForTimeout(5000);
})