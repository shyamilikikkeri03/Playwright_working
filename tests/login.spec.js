const {test,expect}=require('@playwright/test')
test.use({viewport:{width:1500,height:1000}})
//testing the login
test("valid login",async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin");
await page.locator('input[name="password"]').fill("admin123");
await page.locator('//button[@type="submit"]').click();
await page.waitForTimeout(5000);
await expect(page).toHaveURL(/dashboard/);

await page.getByAltText("profile picture").first().click();
await page.getByText("Logout").click();

await page.waitForTimeout(3000);

await expect(page).toHaveURL(/login/);
})

