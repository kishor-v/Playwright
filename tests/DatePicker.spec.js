const { test, expect } = require('@playwright/test');

test('DatePicker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //If Fill is there
    //await page.locator("//input[@id='datepicker']").fill('08/13/2025');

    //if fill is not there 
    //Date Picker 
    const year = "2025";
const month = "March";
const date = "21";

// Open the date picker
await page.click("//input[@id='datepicker']");
// Wait for calendar popup to appear
await page.waitForSelector("//span[@class='ui-datepicker-month']");

// Navigate to the correct month and year
while (true) {
    const currentYear = (await page.locator("//span[@class='ui-datepicker-year']").textContent()).trim();
    const currentMonth = (await page.locator("//span[@class='ui-datepicker-month']").textContent()).trim();

    if (currentYear === year && currentMonth === month) {
        break;
    }
    // Always click the Next button if not at the target month/year
    await page.locator('[title="Next"]').click();
}

// Select the desired date
await page.locator(`//a[text()='${date}']`).click();


    await page.waitForTimeout(5000);
})