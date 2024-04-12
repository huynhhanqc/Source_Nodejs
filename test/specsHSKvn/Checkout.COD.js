import loginpageHSK from "../pageobjectsHSKvn/LoginHSKvn.page.js"
import orderHSK from "../pageobjectsHSKvn/OrderHSK.page.js"

describe("Check Out Hasaki.vn", async () => {
    before(async () => {
      await browser.url("https://staging.hasaki.vn/");
      await expect(browser).toHaveUrl('https://staging.hasaki.vn/')
      await browser.maximizeWindow();
      await loginpageHSK.LoginHSK("0344535989", "Truonghan1506");
      await browser.pause(1000);
    });
    after(async () => {
       browser.closeWindow();
    });
    for (let i = 0; i < 10; i++) {
    it('Payment On Delivery COD Success',async () => {
        await orderHSK.SearchSku.setValue ("100230056");
        await orderHSK.BtnSearch.click ();
        await orderHSK.Bynow.click ();
        await browser.pause(1000);
        await orderHSK.BtnOrder.click ();
        await browser.pause(2000);
        await orderHSK.TextOder.getText();
        await browser.pause(2000);
        await expect(orderHSK.TextOder).toBeDisplayed();

        
        
        
        
        
        // await browser.saveScreenshot('./test/screenshot.png');
        
        

    });
    
  }

  

        
});


