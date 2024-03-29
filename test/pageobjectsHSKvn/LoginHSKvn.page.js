class LoginPageHSKvn
{
    get BtnLogin ()
    {
        return $("#btn-login");
    }
    get username ()
    {
        return $("#username");
    }
    get password ()
    {
        return $("#password");
    }
    get signgin ()
    {
        return $("//button[contains(text(),'Đăng nhập')]");
    }
    
    async LoginHSK (username,password)
    {
        await this.BtnLogin.click ();
       await this.username.setValue(username);
       await this.password.setValue(password);
       await this.signgin.click();
    }

}
export default new LoginPageHSKvn();