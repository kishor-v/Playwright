const { test, expcet } = require('@playwright/test');

test('multiple elements', async ({ page })=> {

    //Lunching your application
    await page.goto('https://demoblaze.com/');

    //call multiple web elememts
    const links = await page.$$('a');
    for(const link of links){   
        const lin = await link.textContent();
        console.log(lin);
    }

})

