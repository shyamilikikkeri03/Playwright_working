const{expect}=require("@playwright/test")
class HomePage{
    constructor(page){
        this.page=page;
        this.manage="//span[normalize-space()='Manage']"//remember thisss
        this.menu="//img[@alt='menu']"
this.signout = "//button[text()='Sign out']";
    }
    async verifyManageOption(){
        await expect(this.page.locator(this.manage)).toBeVisible()
    }
    async logoutFromApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.signout)
    }
}
module.exports=HomePage;