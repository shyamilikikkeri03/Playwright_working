const{expect}=require("@playwright/test")
class LoginPage
{
    constructor (page){//this is the way to create consructor
        this.page=page;
        this.username="#email1";
        this.header="//h2[normalize-space()='Sign In']"
        this.password="#password1";
        this.LoginButton=".submit-btn";
    }
    async loginToApplication(){
        await this.page.fill(this.username,"admin@email.com")//insted of this use user,pass within method and while calling give arguments//can pass from json also
        
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.LoginButton)
    }
async verifySignIn(){
 await expect(this.page.locator(this.header)).toBeVisible()


}}
module.exports=LoginPage;