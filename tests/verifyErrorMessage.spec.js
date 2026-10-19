const {test,expect}=require('@playwright/test')

test("verify error message",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin3")
    await page.locator('//button[normalize-space()="Login"]').click();
    const errorMessage=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("error message is"+errorMessage)
 expect(errorMessage.includes("Invalid")).toBeTruthy()
 //expect (errorMessage.includes("error")).toBeTruthy()//error message will come as it is not present inside
 expect (errorMessage==="Invalid credentials").toBeTruthy();
})
