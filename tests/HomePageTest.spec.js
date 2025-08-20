//To run either use full run : npx playwright test
//                       or
//use this: npx playwright test HomePageTest.spec.js --project=chromium --headed --debug 

// application URL: https://demoblaze.com/
//Username: pavanol
//Password: test@123

//importing the file
const { test, expect } = require('@playwright/test');

test('Home page',async({page})=>{
    await page.goto('https://demoblaze.com/');
    
    //ptint the title
    const pageTitle=page.title();
    await console.log('Page title is:',pageTitle);

    //validation point for title
    await expect(page).toHaveTitle('STORE');

    //capture page url
    // const pageURL=PageTransitionEvent.url('https://demoblaze.com/');
    // await console.log(pageURL);

    //verify the URL
    await expect(page).toHaveURL('https://demoblaze.com/');
    await page.close();
})
