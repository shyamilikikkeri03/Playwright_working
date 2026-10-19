
import { test, expect } from '@playwright/test';

test("working with multiple tabs", async ({ browser }) => {

    // Step 1: Create a new browser context.// A context is an isolated browser environment with its own// cookies, session data, and pages (tabs).
    const context = await browser.newContext();
    // Step 2: Create the first page (tab) inside this context.
    const page = await context.newPage();
    // Step 3: Open the login page in the first tab.
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Step 4: Wait for a new tab to open and click the Facebook link.// Promise.all() runs both operations together:// 1. context.waitForEvent("page") waits for the new tab.// 2. The click opens Facebook in a new tab.// We must start waiting BEFORE the click triggers the new tab.
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),

        // CSS selector: // a = anchor (link) element // [href="..."] = link whose href matches this Facebook URL
        page.locator(
            'a[href="https://www.facebook.com/groups/256655817858291"]'
        ).first().click()
    ]);
await newPage.waitForTimeout(3000)
    // Step 5: Interact with the newly opened tab // newPage represents the Facebook tab, not the original login tab // This locator will work only if the new page contains a matching input.
    await newPage.locator('//input[@id="_r_1_"]').fill("Shyamili@gmail.com");
await newPage.waitForTimeout(3000)
await newPage.close()
    await page.getByPlaceholder("Enter Email").fill("Shyamili@gmail.com");

});
