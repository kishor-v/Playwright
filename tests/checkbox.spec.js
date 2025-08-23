const { test,expect } = require('@playwright/test');

test('Handle Checkbox', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //single Checkbox
    await page.waitForTimeout(1000);  //time in milli second

    await page.locator('//input[@id="sunday"]').check();   //Most prefered

    await page.waitForTimeout(1000);

    //await page.check('//input[@id="sunday"]');

    //Assertions for the single checkbox

    await page.waitForTimeout(1000);

    await expect(await page.locator('//input[@id="sunday"]')).toBeChecked();  //Check it's checked or not

    await page.waitForTimeout(1000);

    await expect(await page.locator('//input[@id="sunday"]').isChecked()).toBeTruthy();  //return True or False 

    // uncheck the checkbox
    //await page.locator("//input[@id='sunday']").uncheck();
    await page.uncheck('//input[@id="sunday"]');

    await page.waitForTimeout(1000);

    //Multiple Checkboxes for Checking

    const checkboxes = [
        "//input[@id='sunday']",
        "//input[@id='monday']",
        "//input[@id='tuesday']",
        "//input[@id='wednesday']",
        "//input[@id='thursday']",
        "//input[@id='friday']",
        "//input[@id='saturday']"
    ] 

    for (const loc of checkboxes) {
        await page.locator(loc).check();
    }

    await page.waitForTimeout(2000);
    
    // Multple Checkboxxfor uncheking
    for (const loc of checkboxes){

        if (await page.locator(loc).isChecked()){
            await page.uncheck(loc);
        }
    }
    
    await page.waitForTimeout(4000);
});