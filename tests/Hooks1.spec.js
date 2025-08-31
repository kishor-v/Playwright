const { test, expect } = require('@playwright/test');

test('Home page Test Hooks', async ({page})=> {

  //Lunch the application
    await page.goto('https://demoblaze.com/');

    //Login 

    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Home Page
    await page.locator("//li[@class='nav-item active']//a[@class='nav-link']").click();

    //Logout

    await page.waitForTimeout(5000);
    await page.locator("//a[@id='logout2']").click();

    await page.waitForTimeout(5000);
});

test('Product page Test Hooks', async ({page})=> {

    await page.goto('https://demoblaze.com/');

    //Login

    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Add Product to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.on('dialog', async dialog=>{

      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Product added.");
      await dialog.accept();
    });


    //Logout

    await page.waitForTimeout(5000);
    await page.locator("//a[@id='logout2']").click();

    await page.waitForTimeout(5000);
});