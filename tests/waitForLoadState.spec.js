import { test, expect } from '@playwright/test';
test("working with load state",async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.locator(".subLink").click()//redirects to signup page
//check number of checkboxes are 10
await page.waitForLoadState("networkidle")
const count=await page.getByRole("checkbox").count()
expect (count).toBe(10)

})


