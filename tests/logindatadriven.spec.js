const {test,expect}=require('@playwright/test')

const testdatadriven =JSON.parse(JSON.stringify(require("../testdatadriven.json")))//to convert javascript code to json strings stringify /*(json string to object*/parse
//group of tests
test.describe("data driven login test",function(){
{

    for(const data of testdatadriven){
        test.describe(`login with users ${data.id}`,function()//there is a duplicate of test name thats why the error comes so we take template string and it helps in reporting and dynamically it takes the id
        {
            test('login to application',async ({page})=>{
 await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill(data.email)
    await page.getByPlaceholder("Enter Password").fill(data.password)
            })
        })
    }
}
})


/*default reportted html
there are some of the built in reporter such as list reported,line reported,dot reported,html,blob,json,junit,github,
you can either mention in playwright.config file or cli while executing
*/
