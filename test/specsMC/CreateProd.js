import loginPage from "../pageobjectsMerchant/LoginMC.page.js";
import pageprod from "../pageobjectsMerchant/Page.Product.page.js";
import addprod from "../pageobjectsMerchant/CreateProd.page.js";

describe("Create Product", async () => {
    before(async () => {
      await browser.url("https://test-merchant.hasaki.vn/login");
      await browser.maximizeWindow();
      await loginPage.Login("truonghan1506","150699");
      await browser.pause(1000);
    });
    after(async () => {
      browser.closeWindow();
    });
    
    it("Create Product Success",async () => {
        await pageprod.Productpage.click ();
        await pageprod.AddNewProductPage.click ();
        await addprod.NameProd.setValue("hihi");

        







    });
});

