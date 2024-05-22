import LoginPageMC from "../pageobjectsMerchant/LoginMC.page.js";
import Addquotation from "../pageobjectsMerchant/QuotationM.page.js";
import Menu from "../pageobjectsMerchant/MenuMC.page.js";

describe("Create Quotation All Stores", async () => {
  before(async () => {
    await LoginPageMC.open();
    await browser.maximizeWindow();
    await LoginPageMC.Login();
    await browser.pause(1000);
  });
  after(async () => {
    await browser.closeWindow();
  });
  it("Article Allocation", async () => {
    await Menu.MenuQuotation.click();
    await Menu.CreateQuotation.click();
    await Addquotation.Note.setValue("TEST");
    await Addquotation.Store.click();
    await Addquotation.MultiStores.click();
    await browser.pause(1000);
    await Addquotation.ZoneBd.click();
    await Addquotation.BtnUseStore.click();
    await Addquotation.Product.click();
    await Addquotation.Inputsku.setValue("100150029");
    await Addquotation.Acceptsku.click();
    await Addquotation.Quantity.clearValue();
    await Addquotation.Quantity.setValue("95"); //default 1
    await Addquotation.BtnAllocate.click();
    await browser.pause(1000);
    await Addquotation.BtnCloseAllocate.click();
    await Addquotation.Btnsave.click();
    await Addquotation.Pupok.click();
    await Addquotation.BtnResqst.click();
    await browser.acceptAlert();
    await Addquotation.TextCode.getText();
  });
  it("Sales Allocation by Order", async () => {
    await Menu.CreateQuotation.click();
    await Addquotation.Note.setValue("TEST");
    await Addquotation.Store.click();
    await Addquotation.MultiStores.click();
    await browser.pause(1000);
    await Addquotation.SalesAllocationbyOrder.click();
    await browser.pause(1000);
    await Addquotation.ZoneBd.click();
    await Addquotation.BtnUseStore.click();
    await Addquotation.Product.click();
    await Addquotation.Inputsku.setValue("100150029");
    await Addquotation.Acceptsku.click();
    await Addquotation.Quantity.clearValue();
    await Addquotation.Quantity.setValue("95"); //default 1
    await Addquotation.BtnAllocate.click();
    await browser.pause(1000);
    await Addquotation.BtnCloseAllocate.click();
    await Addquotation.Btnsave.click();
    await Addquotation.Pupok.click();
    await Addquotation.BtnResqst.click();
    await browser.acceptAlert();
    await Addquotation.TextCode.getText();
  });
});
