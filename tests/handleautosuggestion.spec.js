import { test, expect } from '@playwright/test';
test("handle auto suggesstion",async function({page}){
    await page.goto("https://www.google.com/")
await page.locator(".gLFyf").fill("Mukesh Otwani")

await page.waitForSelector("//li[@role='presentation']")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

})

//second approach
test("handle auto suggesstion using loop",async function({page}){
    await page.goto("https://www.google.com/")
await page.locator(".gLFyf").fill("Shyamili Kikkeri")

const elements=await page.waitForSelector("//li[@role='presentation']")//waiting for selector to stop loading or coming
await page.$$("//li[@role='presentation']")
//$$-return the elements that matches the pattern and returns [] if not match
for (let i=0;i<elements.length;i++){
   const text= await elements[i].textContent()
   //not necessary//when the seo finds the youtube it will click on that and stops the operation
   if(text.includes('youtube')){
    await elements[i].click()
    break;
   }
}

})
