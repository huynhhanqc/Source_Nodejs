import loginPage from "../pageobjectsMerchant/LoginMC.page.js";
import addquotation from "../pageobjectsMerchant/QuotationM.page.js"
describe("Create Quotation M", async () => {
    before(async () => {
      await browser.url("https://test-merchant.hasaki.vn/login");
      await browser.maximizeWindow();
      await loginPage.Login("truonghan1506","150699");
      await browser.pause(1000);
    });
    after(async () => {
      browser.closeWindow();
    });
    it('Create One Sku', async() => {
        await addquotation.MenuQuotation.click ();
        await addquotation.CreateQuotation.click ();
        await addquotation.Note.setValue ("TEST");
        await addquotation.Store.click ();
        await addquotation.InputtoreNGT.click ();
        await addquotation.Product.click ();
        await addquotation.Inputsku.setValue ("422210173");
        await addquotation.Acceptsku.click ();
        await addquotation.Quantity.clearValue();
        await addquotation.Quantity.setValue("2"); 
        await addquotation.Type.click ();
        await addquotation.Typevnd.click ();
        await addquotation.Btnsave.click ();
        await addquotation.Pupok.click ();
        await addquotation.BtnResqst.click ();
        await browser.acceptAlert();
        await addquotation.TextCode.getText();
      });
    it('Create multi-SKU ', async () => {
        await addquotation.MenuQuotation.click ();
        await addquotation.CreateQuotation.click ();
        await addquotation.Note.setValue ("TEST");
        await addquotation.Store.click ();
        await addquotation.InputtoreLVV.click ();
        await addquotation.Product.click ();
        await addquotation.Inputsku.setValue ("422210173");
        await addquotation.Acceptsku.click ();
        await addquotation.Quantity.clearValue();
        await addquotation.Quantity.setValue("2");
        await addquotation.Addnewrow.click ();
        await addquotation.Store.click();
        await addquotation.InputtoreNGT.click ();
        await addquotation.Product.click ();
        




          
        });





    });
