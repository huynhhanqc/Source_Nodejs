import loginpageHSK from "../pageobjectsHSKvn/LoginHSKvn.page.js";
import orderHSK from "../pageobjectsHSKvn/OrderHSK.page.js";
import payment from "../pageobjectsHSKvn/Page.Payment.page.js";
import bank from "../pageobjectsHSKvn/Page.Bank.page.js";

describe("Check Out Hasaki.vn", async () => {
  before(async () => {
    await browser.url("https://staging.hasaki.vn/");
    await browser.maximizeWindow();
    await loginpageHSK.LoginHSK("0344535989", "Truonghan1506");
    await browser.pause(1000);
  });

  after(async () => {
    browser.closeWindow();
  });
  it("Payment By Visa Success", async () => {
    await orderHSK.SearchSku.setValue("318900009");
    await orderHSK.BtnSearch.click();
    await orderHSK.Bynow.click();
    await payment.ChangePay.click();
    await browser.pause(1000);
    await payment.Option2.click();
    await payment.BtnSubmitCard.click();
    await payment.BtnSubmitPay.click();
    await browser.pause(3000);
    await browser.url("https://testsecureacceptance.cybersource.com/checkout");
    await browser.pause(3000);
    await bank.Forename.setValue("Huỳnh Văn Trường");
    await bank.Surname.setValue("Hận");
    await bank.Address.setValue("555 duong 3/2 quan 10");
    await bank.City.setValue("Ho Chi Minh");
    await bank.Phone.setValue("0344535989");
    await bank.Email.setValue("cscscs@gmail.com");
    await bank.Visa.click();
    await bank.CardNumber.setValue("4111111111111111");
    await bank.ExpiryYear.click();
    await bank.Year.click();
    await bank.ExpiryMonth.click();
    await bank.Month.click();
    await bank.CVN.setValue("123");
    await bank.CommitBank.click();
    await browser.pause(1000);
    await bank.Endcommit.click();
    await browser.pause(20000);
    await orderHSK.TextOder.getText();
  });
});
