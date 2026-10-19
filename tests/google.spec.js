const {test,expect}=require('@playwright/test')

test("verify application title",async function({page}){// page is a fixture,isolated page instance and this page will help us to automate our application,once we get this page we can call all the methods and automate our application
await page.goto("https://www.google.com/");
const url=await page.url();
console.log("url is:"+url);
expect(url).toBe("https://www.google.com/");
await expect(page).toHaveTitle("Google");
})