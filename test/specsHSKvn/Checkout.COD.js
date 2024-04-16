import LoginHSKvn from "../pageobjectsHSKvn/LoginHSKvn.page.js"
import OrderHSK from "../pageobjectsHSKvn/OrderHSK.page.js"

describe("Check Out Hasaki.vn", async () => {
    before(async () => {
      await LoginHSKvn.open();
      await browser.maximizeWindow();
      await LoginHSKvn.Login();
      await browser.pause(1000);
    });
    after(async () => {
       browser.closeWindow();
    });
    for (let i = 0; i < 10; i++) {
    it('Payment On Delivery COD Success',async () => {
        await OrderHSK.SearchSku.setValue ("100230056");
        await OrderHSK.BtnSearch.click ();
        await OrderHSK.Bynow.click ();
        await browser.pause(1000);
        await OrderHSK.BtnOrder.click ();
        await browser.pause(2000);
        await OrderHSK.TextOder.getText();
        await browser.pause(2000);
        await expect(OrderHSK.TextOder).toBeDisplayed();

        
        
        
        
        
        // await browser.saveScreenshot('./test/screenshot.png');
        
        

    });
    
  }

  

        
});


