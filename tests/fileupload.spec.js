import { test, expect } from '@playwright/test';

test("verify the file upload",async function({page}){
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("D:/SQL_4/sql quesries.txt")
await page.waitForTimeout(3000)
//checking whether file uploaded message is coming or not

await page.locator("#file-submit").click();

expect(await page.locator("h3")).toHaveText("File Uploaded!")
//the good practice is to keep the file withing the same folder we are using otherwise if the file location is changed the tets might fail
})

//multiple files
//await page.locator("#file-upload").setInputFiles(['D:/SQL_4/sql quesries.txt','D:/SQL_4/sql quesries.txt'])

//remove all selected files
//await page.locator("#file-upload").setInputFiles([])

