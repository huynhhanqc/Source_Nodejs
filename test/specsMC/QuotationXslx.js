import LoginPage from "../pageobjectsMerchant/LoginMC.page.js";
import ImportExcel from "../pageobjectsMerchant/QuotationXslx.page.js";
import MenuMC from "../pageobjectsMerchant/MenuMC.page.js";
describe("Quotation Import Excel", async () => {
  before(async () => {
    await browser.url("https://test-merchant.hasaki.vn/login");
    await browser.maximizeWindow();
    await LoginPage.Login("truonghan1506", "150699");
    await browser.pause(1000);
  });
  after(async () => {
    browser.closeWindow();
  });
  it("Import Excell Success", async () => {
    await MenuMC.MenuQuotation.click();
    await browser.pause(1000);
    await MenuMC.CreateQuotationExcel.click();
    const filepath = "test/testData/quotation-template.xlsx";
    const remoteFilePath = await browser.uploadFile(filepath);
    await ImportExcel.uploadexcel.setValue(remoteFilePath);
    await ImportExcel.btnValidate.click();
    browser.acceptAlert();
    await browser.pause(1000);
    await ImportExcel.btnSaveQuotation.click ();
    await ImportExcel.btnOK.click ();
    await ImportExcel.titleReview.getText ();
    await ImportExcel.btnRequest.click();
    browser.acceptAlert();
    
     



  });
});
