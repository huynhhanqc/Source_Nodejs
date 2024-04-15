import loginPage from "../pageobjectsMerchant/LoginMC.page.js";
import Newsellout from "../pageobjectsMerchant/NewSellOut.page.js";
import Menu from "../pageobjectsMerchant/MenuMC.page.js";

describe("Create Promotion Sell Out ", async () => {
  before(async () => {
    await browser.url("https://test-merchant.hasaki.vn/login");
    await browser.maximizeWindow();
    await loginPage.Login("truonghan1506", "150699");
    await browser.pause(1000);
  }); 
  after(async () => {
    browser.closeWindow();
  });
  it("New Condition Type Product", async () => {
    await Menu.MenuPromotionProgram.click();
    await browser.pause(1000);
    await Menu.CreatePromotion.click();
    await browser.pause(1000);
    await Newsellout.PromotionName.setValue("Mua 100 Tặng 1.000.000 VND");
    await Newsellout.Note.setValue("Han Test Product");
    await Newsellout.FromDate.click();
    await Newsellout.ChoosefromDate.click();
    await Newsellout.ToDate.click();
    await Newsellout.Choosetodate.click();
    await Newsellout.MainProduct.click();
    await browser.pause(1000);
    await Newsellout.InputSKU.setValue("100150029");
    await browser.pause(1000);
    await Newsellout.OkaySku.click();
    await Newsellout.Quantity.setValue("100");
    await Newsellout.DiscountValue.setValue("2000000");
    await Newsellout.BtnSavePromotion.click();
    await Newsellout.BtnRequest.click();
    await browser.acceptAlert();
  });
  it("New Condition Type Brand", async () => {
    await Pagepromotion.PMTprogram.click();
    await browser.pause(1000);
    await Pagepromotion.createSellOut.click();
    await Newsellout.PromotionName.setValue("Mua 100 Tặng 1.000.000 VND");
    await Newsellout.Note.setValue("Hận Test Brand");
    await Newsellout.FromDate.click();
    await Newsellout.ChoosefromDate.click();
    await Newsellout.ToDate.click();
    await Newsellout.Choosetodate.click();
    await Newsellout.ConditionType.click();
    await Newsellout.TypeBrand.click();
    await Newsellout.SelectBrand.click();
    await Newsellout.InputBrand.click();
    await Newsellout.Orderminspend.setValue("10");
    await Newsellout.Typeprecent.click();
    await Newsellout.Byprecent.click();
    await Newsellout.DiscountValue.setValue("50");
    await Newsellout.MaximumDiscountperOrder.setValue("100");
    await Newsellout.BtnSavePromotion.click();
    await Newsellout.BtnRequest.click();
    browser.acceptAlert();
  });
});
