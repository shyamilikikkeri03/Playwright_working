import { test, expect } from '@playwright/test';

test/*skip-to stop executing this,only to run only that test*/("handle alert",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async (dialogWindow)=>{//page is the webpage on means automatically gets called dialog means whenever there is a dialog in the webpage it captures that and stores that in d variable
       /*generally not used*/ expect(dialogWindow.type()/*selects the type*/).toBe("alert")//can use toBe("alert")
       /*mainly used this*/ expect (dialogWindow.message()).toContain("I am a JS Alert")
        await dialogWindow.accept();
    })
    await page.getByRole("button",{name:"Click for JS Alert"}).click()
})

test("handle confirm box",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//must and necessaryyy||||before doing click,we need to do this listen ,this is an event listener
    page.on("dialog",async(dialogWindow)=>{
        expect(dialogWindow.type()).toBe("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm");
await dialogWindow.dismiss()//predefined method which will return when the page id dismissed
    })
await page.getByRole("button",{name:"Click for JS Confirm"}).click();
})

test("handle the js prompt",async function ({page}){
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        page.on("dialog",async (dialogWindow)=>{
        expect (dialogWindow.type()).toBe("prompt")
expect (dialogWindow.message()).toContain("I am a JS prompt")
await dialogWindow.accept("Shyamili")
        } )
await page.getByRole("button",{name:"Click for JS Prompt"}).click();
await page.waitForTimeout(5000)
})