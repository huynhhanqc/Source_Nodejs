import UrlHSKvn from "../pageobjectsHSKvn/UrlHSKvn.page.js";
class LoginPageHSKvn extends UrlHSKvn {
  get BtnLogin() {
    return $("#btn-login");
  }
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get signgin() {
    return $("//button[contains(text(),'Đăng nhập')]");
  }

  async Login () {
    await this.BtnLogin.click();
    await this.username.setValue("0344535989");
    await this.password.setValue("Truonghan1506");
    await this.signgin.click();
  }
  async open () {
    await super.open('https://staging.hasaki.vn/');
}
}
export default new LoginPageHSKvn();
