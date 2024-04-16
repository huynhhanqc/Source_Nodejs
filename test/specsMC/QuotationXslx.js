import LoginPageMC from "../pageobjectsMerchant/LoginMC.page.js";
import ImportExcel from "../pageobjectsMerchant/QuotationXslx.page.js";
import MenuMC from "../pageobjectsMerchant/MenuMC.page.js";
describe("Quotation Import Excel", async () => {
  before(async () => {
    await LoginPageMC.open();
      await browser.maximizeWindow();
      await LoginPageMC.Login();
      await browser.pause(1000);
  });
  after(async () => {
    browser.closeWindow();
  });
  it("Import Excell Barcode Success", async () => {
    await MenuMC.MenuQuotation.click();
    await browser.pause(1000);
    await MenuMC.CreateQuotationExcel.click();
    await ImportExcel.SelectTime.click ();
    await ImportExcel.SetTime.click ();
    await ImportExcel.Note.setValue ("Han Test File Barcode");
    const filepath = "test/testData/quotation-barcode.xlsx";
    const remoteFilePath = await browser.uploadFile(filepath);
    await ImportExcel.UploadExcel.setValue(remoteFilePath);
    await ImportExcel.BtnValidate.click();
    browser.acceptAlert();
    await browser.pause(1000);
    await ImportExcel.BtnSaveQuotation.click();
    await ImportExcel.BtnOK.click();
    await ImportExcel.TitleReview.getText();
    await ImportExcel.BtnRequest.click();
    browser.acceptAlert();
  });
  it('Import Excell Product Success',async () => {
    await MenuMC.CreateQuotationExcel.click();
    await ImportExcel.SelectTime.click ();
    await ImportExcel.SetTime.click ();
    await ImportExcel.SelectType.click ();
    await ImportExcel.TypeTester.click ();
    await ImportExcel.BtnValidate.click ();
    await ImportExcel.Note.setValue ("Han Test File Product");
    await ImportExcel.ImportbySku.click ();
    const filepath = "test/testData/quotation-Product.xlsx";
    const remoteFilePath = await browser.uploadFile(filepath);
    await ImportExcel.UploadExcel.setValue(remoteFilePath);
    await ImportExcel.BtnValidate.click();
    browser.acceptAlert();
    await browser.pause(1000);
    await ImportExcel.BtnSaveQuotation.click();
    await ImportExcel.BtnOK.click();
    await ImportExcel.TitleReview.getText();
    await ImportExcel.BtnRequest.click();
    browser.acceptAlert();


    
  });
});
