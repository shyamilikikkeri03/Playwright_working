import { test, expect } from '@playwright/test';
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))//to convert javascript code to json strings stringify /*(json string to object*/parse
test("login to application using json data",async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill(testdata.username)
    await page.getByPlaceholder("Enter Password").fill(testdata.password)
})

//if we keep on hardcoding the values,every test needs some kind of test data,and if thehardcoding values in every script,and u want to change the value means u need to update every script,lot of maintenece cost,---so keep all the test data in sepearate file and scriopts take data from this file and (not hardcoding but parameterizing),highly recommonded json files

//current directory means ../

//ITS AN ARRAY accessing using testdata.intrests[0]
//accesing using testdata.address.area

//there is a separate file that i created for signup if want use that while revising