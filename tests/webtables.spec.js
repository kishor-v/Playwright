const { test, expect } = require('@playwright/test');
const { table } = require('console');

test('Web Table', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator("#productTable");

    //toltal number of rows and cols

    const cols = table.locator("thead tr th");
    console.log("Number of columns: ", await cols.count());

    const rows = table.locator("tbody tr");
    console.log("Number of rows:", await rows.count());

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');
        const tdCount = await tds.count(); // Await the count

        for (let j = 0; j < tdCount; j++) { // Loop through all columns
            console.log(await tds.nth(j).textContent());
        }
    }



    await page.waitForTimeout(5000);
});