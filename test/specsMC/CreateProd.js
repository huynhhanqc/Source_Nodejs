import LoginPageMC from "../pageobjectsMerchant/LoginMC.page.js";
import Addprod from "../pageobjectsMerchant/CreateProd.page.js";
import Menu from "../pageobjectsMerchant/MenuMC.page.js";

describe("Create Product", async () => {
    before(async () => {
      await LoginPageMC.open();
      await browser.maximizeWindow();
      await LoginPageMC.Login();
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

