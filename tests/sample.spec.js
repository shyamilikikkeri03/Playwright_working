const {test,expect}=require('@playwright/test')

test("my first test",async function({page}){// page is a fixture,isolated page instance and this page will help us to automate our application,once we get this page we can call all the methods and automate our application
expect(12).toBe(12);

})

test.skip("my second test",async function({page}){
expect(100).toBe(101)
})

test("my third test",async function({page}){
expect(2.0).toBe(2.0);
})

test("my fourth test",async function({page}){//to run only this test
expect("shyamili").toContain("shyamili");
})

test("my fifth test",async function({page}){
expect(true).toBeTruthy();
})

test("my sixth test",async function({page}){
expect(false).toBeFalsy();
})

test("my seventh test",async function(){
    expect("shyamili".includes("shyamili")).toBeTruthy()
}
)