const { test, expect } = require('@playwright/test');

test('Assertion', async ({ page })=> {
    
    // //1.Open the URL
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fcart');

    // //1.Expect the URL is Corrrect Assertion
    // await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2Fcart');

    // //2.title
    // await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //visable
    // const logo=await page.locator('//img[@alt="nopCommerce demo store"]');
    // await expect(logo).toBeVisible();
    
    //enable and disabled
    // const searchBar = page.locator('//input[@id="FirstName"]');
    // await expect(searchBar).toBeEnabled();

    //check the radio or chechbox
    // const male=await page.locator('//input[@id="gender-male"]');
    // await male.click()
    // await expect(male).toBeChecked();

    //conetnt testing
    await expect(await page.locator('p:nth-child(1)')).toHaveText('Online');
    

})