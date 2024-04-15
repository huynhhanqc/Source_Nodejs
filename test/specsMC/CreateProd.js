import LoginPage from "../pageobjectsMerchant/LoginMC.page.js";
import Addprod from "../pageobjectsMerchant/CreateProd.page.js";
import Menu from "../pageobjectsMerchant/Menu.page.js";

describe("Create Product", async () => {
    before(async () => {
      await browser.url("https://test-merchant.hasaki.vn/login");
      await browser.maximizeWindow();
      await LoginPage.Login("truonghan1506","150699");
      await browser.pause(1000);
    });
    after(async () => {
      browser.closeWindow();
    });
    
    it("Create Product Success",async () => {
      await Menu.MenuProduct.click ();
      await Menu.AddNewProduct.click ();
        

        







    });
});

