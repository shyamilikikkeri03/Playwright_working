import { test, expect } from '@playwright/test';

test("valid login",async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    //if you know the role of elemnt u=you are targeting use getbyrole and accessible name is also important
    await page.getByRole("button",{name:"Sign in"}).click();//the most import one
    await page.waitForTimeout(5000)
   // await page.getByText("Manage").hover()
    //to perform mouse hover
    // //this works
await page.locator("span",{hasText:"Manage"}).hover()//this also works
await page.waitForTimeout(2000)
await page.getByText("Manage Courses").click();
await page.waitForTimeout(2000)

await page.getByText("Manage Categories").click();
await page.waitForTimeout(2000)


})