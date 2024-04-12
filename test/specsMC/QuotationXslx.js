import loginPage from "../pageobjectsMerchant/LoginMC.page.js";
import quotationexcel from "../pageobjectsMerchant/QuotationXslx.page.js";
import addquotation from "../pageobjectsMerchant/QuotationM.page.js";

describe("Create Quotation Excel", async () => {
    before(async () => {
      await browser.url("https://test-merchant.hasaki.vn/login");
      await browser.maximizeWindow();
      await loginPage.Login("truonghan1506","150699");
      await browser.pause(1000);
    });
    after(async () => {
      browser.closeWindow();
    });
    it('Testcase 1',async () => {
        await addquotation.MenuQuotation.click ();
        await browser.pause(2000);
        await quotationexcel.pageExcel.click ();
        await quotationexcel.uploadexcel.click ();
        browser.uploadFile("c:\\Users\\HASAKI\\Downloads\\purchase order confirm (5).xlsx");
        await quotationexcel.btnValidate.click ();

        await browser.pause(5000);
        







        
    });
})