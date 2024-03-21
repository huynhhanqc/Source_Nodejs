import loginPage from '../pageobjects/LoginMC.page.js'
import Pagepromotion from '../pageobjects/Page.SellOut.page.js'
import CreatePromotionsellout from '../pageobjects/CreateSellOut.page.js'

describe('Login Page Merchant ',async () => {
    before(async () => {
        await browser.url("https://test-merchant.hasaki.vn/login");
       await browser.maximizeWindow();
       await loginPage.Login("admin","123123");
       await browser.pause(1000);
       await Pagepromotion.PMTprogram.click();
       await browser.pause(2000);
       await Pagepromotion.createSellOut.click();
       await browser.pause(2000);
    });

    // after(async ()=>{   
    //     browser.closeWindow();
    // }); 

    it('New Condition Type Product',async () => {
        await CreatePromotionsellout.PromotionName.setValue("Mua 100 Tặng 1.000.000 VND");
        await CreatePromotionsellout.Note.setValue("Hận Test Product");
        await CreatePromotionsellout.FromDate.click();
        await CreatePromotionsellout.ChoosefromDate.click();
        await CreatePromotionsellout.ToDate.click();
        await CreatePromotionsellout.Choosetodate.click();
        await CreatePromotionsellout.MainProduct.click();
        await browser.pause(2000);
        await CreatePromotionsellout.MainProduct.setValue("100150029");
        await browser.pause(2000);
        await CreatePromotionsellout.OkaySKU.click();


        


        
    });
});





