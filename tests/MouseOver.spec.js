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

test.skip('Double Click', async ({page})=>{

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

test.skip('Drag and Drop', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // address
    const source = await page.locator("//div[@id='draggable']");
    const destination = await page.locator("//div[@id='droppable']");

    //Drag and drop
    await source.dragTo(destination);

    await page.waitForTimeout(5000);
});

test('Handle keyboard action', async ({page})=>{

    await page.goto('https://platform.text.com/tools/diff-checker');
    await page.waitForTimeout(5000);

    await page.type("//body/main[@class='main']/section/div[@class='checker_checkContainer__DgX01']/div[@class='tool-box_wrapper__bvfUv']/div[@class='tool-box_content__93b_y']/div[@class='checker_editors___imAg']/div[1]/div[1]", 'hello');

    await page.waitForTimeout(5000);
    //Ctrl+A

    await page.keyboard.press('Meta+A'); //Meta means text copy
    //Ctrl+C

    await page.keyboard.press('Meta+C');
    //TAB

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl+V

    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);
});