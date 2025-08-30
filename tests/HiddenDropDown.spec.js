const { test, expect } = require('@playwright/test');

test('Hidden Dropdown', async ({page})=> {

    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(5000);
    //Username 
     await page.locator("//input[@placeholder='Username']").fill('Admin');

     await page.waitForTimeout(5000);
     //Password
     await page.locator("//input[@placeholder='Password']").fill('admin123');

     await page.waitForTimeout(5000);
     //Click on Login Button
     await page.locator("//button[normalize-space()='Login']").click();

    // await page.waitForTimeout(3000);

    // Navigate to PIM
    await page.waitForTimeout(5000);
    await page.locator("//a[normalize-space()='PIM']").click();

    //Click on DropDown
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]");

    //Wait for the element
    // await page.waitForTimeout(3000);    
    const options = await page.$$("//div[@role='listbox']//span");

    for (let option of options){
        await page.waitForTimeout(5000);
        const jobtitle = option.textContent();
        await page.waitForTimeout(5000);
        // console.log(jobtitle);
        await page.waitForTimeout(5000);
        if (jobtitle == "QA Engineer"){
                option.click();
        }
    }
    

    await page.waitForTimeout(5000);
})