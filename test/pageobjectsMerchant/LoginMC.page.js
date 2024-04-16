import UrlMC from "../pageobjectsMerchant/UrlMC.page.js";
class LoginPageMC extends UrlMC 
{
    get username ()
    {
        return $("input[name='username']");
    }
    get password ()
    {
        return $("#password");
    }
    get signgin ()
    {
        return $("#kt_sign_in_submit");
    }
    
    async Login ()
    {
       await this.username.setValue("truonghan1506");
       await this.password.setValue("150699");
       await this.signgin.click();
    }
    async open () {
        await super.open('https://test-merchant.hasaki.vn/login');
    }
}
export default new LoginPageMC();

