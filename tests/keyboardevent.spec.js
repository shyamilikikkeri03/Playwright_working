import { test, expect } from '@playwright/test';
test("keyboard events in playwright",async function({page}){
await page.goto("https://www.google.com/")
await page.locator(".gLFyf")//locate the element
await page.locator(".gLFyf").focus()//focus the element
await page.locator(".gLFyf").fill("Shyamili Kikkeri")//enter the element
//await page.keyboard.press("Enter")//there are multiple methods present 
await page.keyboard.press("ArrowLeft")//from blinking spot it will move left

await page.keyboard.down("Shift")//we will be keeping the key down right so down and need to move in arrowleft position right so curosr shifting in arrowleft position

for (let i=0;i<=7;i++){
    await page.keyboard.press("ArrowLeft")//for 6 words arrowleft
}
await page.keyboard.up("Shift")//release the shift key 
await page.keyboard.press("Backspace")

await page.waitForTimeout(3000)
await page.keyboard.press("Control+A")
await page.waitForTimeout(3000)
await page.keyboard.press("Control+C")
await page.waitForTimeout(3000)
await page.keyboard.press("Backspace")
await page.waitForTimeout(3000)
await page.keyboard.press("Control+V")
})