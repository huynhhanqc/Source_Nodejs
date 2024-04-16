 class QuotationExcel {
  
  get SelectTime() {
    return $("//*[@id='receivingTime']");
  }
  get SetTime() {
    return $("//*[@class='flatpickr-day 'and text()='29']");
  }
  get SelectType() {
    return $("//*[@aria-labelledby='select2-quotationType-container']/parent::*");
  }
  get TypeTester() {
    return $("(//li[text()='Tester']/parent::*)[1]");
  }
  get RequireVat() {
    return $("//*[@id='quotationConfig']/parent::*");
  }
  get Note() {
    return $("//*[@id='quotationNote']");
  }
  get UploadExcel() {
    return $("//input[@id='excelFile']");
  }
  get ImportbySku() {
    return $("//div[@class='import-type']//label[text()='Import by sku']");
  }
  get ImportbyBarcode() {
    return $("//div[@class='import-type']//label[text()='Import by barcode']");
  }
  get BtnValidate() {
    return $("//*[text()='Validate File']/parent::*");
  }
  get BtnSaveQuotation() {
    return $("//*[@id='saveQuotation']");
  }
  get BtnOK() {
    return $("//button[text()='OK']");
  }
  get TitleReview () {
    return $("//div[text()=' Quotation Review ']");
  }

  get BtnRequest () {
    return $("//*[text()='Request to confirm']");
  }
  
}
export default new QuotationExcel();
