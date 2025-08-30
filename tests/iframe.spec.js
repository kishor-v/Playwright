const { test, expect } = require('@playwright/test');

test('Handle iframe', async ({page})=>{

    // await page.goto('https://ui.vision/demo/webtest/frames/');

    

    //total number of frames
    // const allframe = await page.frames();

    // console.log("Number of frames:", allframe.length);

    // await page.waitForTimeout(5000);

    //Type 1 : useing name or URL

    //const fram1 await page.frame('name');
    // const frame1 = await page.frame({ url : 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.locator("//input[@name='mytext1']").fill('hello');

    //Type 2 : useing frame Locator
    // const inputboxiframe = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    // await inputboxiframe.fill('hello');

    // Inner Iframe how to handel

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.click("//a[normalize-space()='Iframe with in an Iframe']");
    await page.waitForTimeout(5000);
    const frame3 = await page.frame({ url : "https://demo.automationtesting.in/MultipleFrames.html"});
    
    //Nested frame
    const childFrames = frame3.childFrames();   // get child frames
    const childFrame = childFrames[0];          // pick the first one

    await childFrame.locator("//input[@type='text']").fill('heelo');

    await page.waitForTimeout(5000);
})