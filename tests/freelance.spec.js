const {test,expect}=require('@playwright/test');
const { log } = require('console');
test("validating the signup page",async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("Shyamili Kikkeri");
    await page.getByPlaceholder("Email").fill("Shyamili@gmail.com");
    await page.getByPlaceholder("Password").fill("Shyamili@123");

    await expect(page.getByPlaceholder("Name")).toHaveValue("Shyamili Kikkeri");
    await expect(page.getByPlaceholder("Email")).toHaveValue("Shyamili@gmail.com");
    await expect(page.getByPlaceholder("Password")).toHaveValue("Shyamili@123");
//handling the dropdown
//always give the prioirity to label,because index and values will be dynmaic
    await page.locator("#state").selectOption({label:"Goa"})//select one specific value from deropwdown if the select tag is used
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:"Karnataka"})//based on value
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index:4})//based on index
    await page.waitForTimeout(2000)

    //assertions
    /*const values=await page.locator("#state").textContent()
    console.log("all dropdown values"+ " "+values)
    await expect (values.includes("Kerala")).toBeTruthy();*/

    //another approach to check whether a certain values arev present or not
    let states= await page.locator("#state")
    let allstates = await states.locator ("option")

    let ddstatus =false;

    for(let i=0;i<await allstates.count();i++){
        let elements=allstates.nth(i)/*element at index of i*///retrives the text
        let value=await elements.textContent();

        if(value.includes("Rajasthan")){
            ddstatus=true;
            break;
        }
        console.log("value from dropdown using for loop"+" "+value)
    }
            await expect(ddstatus).toBeTruthy()//once everything done ddstatus has to be true right thats why

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])

    await page.waitForTimeout(3000)
})