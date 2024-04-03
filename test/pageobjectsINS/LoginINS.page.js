class LoginINS 
{
    get Email ()
    {
        return $("//input[@name='email']");
    }
    get Password ()
    {
        return $("#password");
    }
    get Btnsignin ()
    {
        return $("//button[@type='submit']");
    }
    async Loginins (Email,password)
    {
       await this.Email.setValue(Email);
       await this.Password.setValue(password);
       await this.Btnsignin.click();
    }



}
export default new LoginINS();