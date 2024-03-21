class LoginPage 
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
    
    async Login (username,password)
    {
       await this.username.setValue(username);
       await this.password.setValue(password);
       await this.signgin.click();
    }
}
export default new LoginPage();

