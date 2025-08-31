const { test, expect } = require('@playwright/test');


  let page;
  let context;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    
    await page.goto('https://demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.locator("//input[@id='loginpassword']").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
  });

  test.afterAll(async () => {
    await page.locator("//a[@id='logout2']").click();
    await page.waitForTimeout(5000);
    await page.close();
    await context.close();
  });

  test('Home page Test Hooks', async () => {
    await page.locator("//li[@class='nav-item active']//a[@class='nav-link']").click();
  });

  test('Product page Test Hooks', async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Product added.");
      await dialog.accept();
    });
  });
