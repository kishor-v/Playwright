const { test, expect } = require('@playwright/test');

test.skip('Alert with OK', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enable the Dialog window handler
    page.on('dialog',async dialog=>{
         
        //Validation
        expect(dialog.type()).toContain('alert');
        //validation
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click("//button[@id='alertBtn']");
    
    await page.waitForTimeout(5000);
});

test.skip('Confirmation dialog with ok and cancel', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enable the Dialog window handler
    page.on('dialog',async dialog=>{
         
        //Validation
        expect(dialog.type()).toContain('confirm');
        //validation
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept();  //Close by useing OK Button
        await dialog.dismiss(); //close by using cancel button
    });

    await page.click("//button[@id='confirmBtn']");

    await page.waitForTimeout(5000);
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');
    
    await page.waitForTimeout(5000);
});

test('Promt Dialog', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enable the Dialog window handler
    page.on('dialog',async dialog=>{
         
        //Validation
        expect(dialog.type()).toContain('prompt');
        //validation
        expect(dialog.message()).toContain('Please enter your name:');
        await page.waitForTimeout(5000)
        expect(dialog.defaultValue()).toContain('Harry Potter');    //check the defualt value
        await dialog.accept('kishor');  //Close by useing OK Button
        await page.waitForTimeout(5000);
        //await dialog.dismiss(); //close by using cancel button
    });

    await page.click("//button[@id='promptBtn']");

    await page.waitForTimeout(5000);
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello kishor! How are you today?');
    
    await page.waitForTimeout(5000);
});