import loginPage from "../pageobjectsMerchant/LoginMC.page.js";
import Pagepromotion from "../pageobjectsMerchant/Page.SellOut.page.js";
import CreatePromotionsellout from "../pageobjectsMerchant/CreateSellOut.page.js";

describe("Create Promotion Sell Out ", async () => {
  before(async () => {
    await browser.url("https://test-merchant.hasaki.vn/login");
    await browser.maximizeWindow();
    await loginPage.Login("truonghan1506","150699");
    await browser.pause(1000);
  });
  after(async () => {
    browser.closeWindow();
  });
  it("New Condition Type Product", async () => {
    await Pagepromotion.PMTprogram.click();
    await browser.pause(1000);
    await Pagepromotion.createSellOut.click();
    await browser.pause(1000);
    await CreatePromotionsellout.PromotionName.setValue(
      "Mua 100 Tặng 1.000.000 VND"
    );
    await CreatePromotionsellout.Note.setValue("Han Test Product");
    await CreatePromotionsellout.FromDate.click();
    await CreatePromotionsellout.ChoosefromDate.click();
    await CreatePromotionsellout.ToDate.click();
    await CreatePromotionsellout.Choosetodate.click();
    await CreatePromotionsellout.MainProduct.click();
    await browser.pause(1000);
    await CreatePromotionsellout.InputSKU.setValue("100150029");
    await browser.pause(1000);
    await CreatePromotionsellout.OkaySku.click();
    await CreatePromotionsellout.Quantity.setValue("100");
    await CreatePromotionsellout.DiscountValue.setValue("2000000");
    await CreatePromotionsellout.BtnSavePromotion.click();
    await CreatePromotionsellout.BtnRequest.click();
    browser.acceptAlert();
  });
  it("New Condition Type Brand", async () => {
    await Pagepromotion.PMTprogram.click();
    await browser.pause(1000);
    await Pagepromotion.createSellOut.click();
    await browser.pause(1000);
    await CreatePromotionsellout.PromotionName.setValue(
      "Mua 100 Tặng 1.000.000 VND"
    );
    await CreatePromotionsellout.Note.setValue("Hận Test Brand");
    await CreatePromotionsellout.FromDate.click();
    await CreatePromotionsellout.ChoosefromDate.click();
    await CreatePromotionsellout.ToDate.click();
    await CreatePromotionsellout.Choosetodate.click();
    await CreatePromotionsellout.ConditionType.click();
    await CreatePromotionsellout.TypeBrand.click();
    await CreatePromotionsellout.SelectBrand.click();
    await CreatePromotionsellout.InputBrand.click();
    await CreatePromotionsellout.Orderminspend.setValue("10");
    await CreatePromotionsellout.Typeprecent.click();
    await CreatePromotionsellout.Byprecent.click();
    await CreatePromotionsellout.DiscountValue.setValue("50");
    await CreatePromotionsellout.MaximumDiscountperOrder.setValue("100");
    await CreatePromotionsellout.BtnSavePromotion.click();
    await CreatePromotionsellout.BtnRequest.click();
    browser.acceptAlert();
    
  });
});
