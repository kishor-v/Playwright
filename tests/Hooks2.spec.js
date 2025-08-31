const { test, expect } = require('@playwright/test');

let page;
let context;
test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    
    // Launch the application
    await page.goto('https://demoblaze.com/');
    // Login 
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterEach(async () => {
    // Logout
    await page.locator("//a[@id='logout2']").click();
    await page.waitForTimeout(5000);
});

test('Home page Test Hooks', async () => {
    // Home Page
    await page.locator("//li[@class='nav-item active']//a[@class='nav-link']").click();
});

test('Product page Test Hooks', async () => {
    // Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });
});
