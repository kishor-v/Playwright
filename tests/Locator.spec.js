const { test, expect } = require('@playwright/test');

test('Locators', async ({page})=>{

    //1.open the browser
    await page.goto('https://demoblaze.com/');

    //2.Click on the Login
    await page.click('//a[@id="login2"]');

    //3.Enter Username
    await page.fill('//input[@id="loginusername"]', 'pavanol');

    //4.Enter password
    await page.fill('//input[@id="loginpassword"]','test@123');

    //5.Click on Login
    await page.click('//button[normalize-space()="Log in"]');

    //6.Click on Logout
    await page.click('//a[@id="logout2"]');

    //7.vaildation point
    const logout=await page.title();
    await expect(page).toHaveTitle('STORE');

    //8.close
    await page.close();
})