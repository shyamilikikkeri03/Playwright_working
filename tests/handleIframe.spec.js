import { test, expect } from '@playwright/test';
test("handle the iframe",async function({page}){
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    //await page.getByRole("a",{name:"java.applet"}).click()
    //as this is the iframe it wont get clicked and playwright has autowaiting so it waits for some time and gets error message

    //when working with the iframes you can create a frame locator that will enter the iframe and allow selecting elements in that iframe
    const iframe=await page.frameLocator('frame[name="packageListFrame"]')
    await iframe.getByRole("link",{name:"java.applet"}).click()
await page.pause()//it will get us a playwright inspector
})
