const { test, expect } = require('@playwright/test');

test('Home Page',async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAltTest()
    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByPlaceholder()
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //getByRole()
    await page.getByRole('button',{type : 'submit'}).click();

    //getByText()
    await page.getByText()

    //page close
    await page.close();
});