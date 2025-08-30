const { test,expect } = require('@playwright/test');

test('Multple select Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(1000);

    //Select multiple options from multi slect dropdow
    await page.waitForTimeout(3000);
    // await page.selectOption("//select[@id='colors']", ['Blue', 'Red', 'Yellow']);
    await page.locator("//select[@id='colors']").selectOption(['Blue','Red']);
    await page.waitForTimeout(3000);

    await page.waitForTimeout(5000);
});