const { test, expect } = require('@playwright/test');

test('Sample playwright', async ({ page })=> {

    //Lunch the Bowser
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Check the logo is present
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Enter Username
    await page.locator('//input[@placeholder="Username"]').fill('Admin');

    //Enter password
    await page.fill('','admin123');

    //Click on Submit 
    await page.click()

    //close the page
    await page.close();
})