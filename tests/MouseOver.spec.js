const { test, expect } = require('@playwright/test');

test.skip('Mouse Over', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // address
    const print_me = await page.locator("//button[normalize-space()='Point Me']");
    const laptop = await page.locator("//a[normalize-space()='Laptops']");

    //Mouse Over
    await print_me.hover();
    await laptop.hover();

    await page.waitForTimeout(5000);

});

test.skip('Mouse Right Click', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html');

    // address
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
   
    await page.waitForTimeout(5000);

    //Mouse Right Click
    await button.click({button: 'right'});

    await page.waitForTimeout(5000);

});

test('Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // address
    const double_click = await page.locator("//button[normalize-space()='Copy Text']");
   
    await page.waitForTimeout(5000);

    //Dobule click 
    await double_click.dblclick();

    //validte
    const f2 = await page.locator("//input[@id='field2']")

    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

});