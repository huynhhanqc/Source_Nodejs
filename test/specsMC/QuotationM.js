import LoginPageMC from "../pageobjectsMerchant/LoginMC.page.js";
import Addquotation from "../pageobjectsMerchant/QuotationM.page.js";
import Menu from "../pageobjectsMerchant/MenuMC.page.js";

describe("Create Quotation M", async () => {
  before(async () => {
    await LoginPageMC.open();
    await browser.maximizeWindow();
    await LoginPageMC.Login();
    await browser.pause(1000);
  });
  after(async () => {
    browser.closeWindow();
  });
  for (let i = 0; i < 1; i++) {
    it("Create One Sku", async () => {
      await Menu.MenuQuotation.click();
      await Menu.CreateQuotation.click();
      await Addquotation.Note.setValue("TEST");
      await Addquotation.Store.click();
      await Addquotation.StoreLVQ.click();
      await Addquotation.Product.click();
      await Addquotation.Inputsku.setValue("422210173");
      await Addquotation.Acceptsku.click();
      await Addquotation.Quantity.clearValue();
      await Addquotation.Quantity.setValue("1");
      await Addquotation.Type.click();
      await Addquotation.Typevnd.click();
      await Addquotation.Btnsave.click();
      await Addquotation.Pupok.click();
      await Addquotation.BtnResqst.click();
      await browser.acceptAlert();
      await Addquotation.TextCode.getText();
    });
  }
});
