class QuotationExcel {
  
  get receivingTime() {
    return $("");
  }
  get quotationType() {
    return $("");
  }
  get requireVat() {
    return $("");
  }
  get note() {
    return $("");
  }
  get uploadexcel() {
    return $("//input[@id='excelFile']");
  }
  get importbysku() {
    return $("//div[@class='import-type']//label[text()='Import by sku']");
  }
  get importbyBarcode() {
    return $("//div[@class='import-type']//label[text()='Import by barcode']");
  }
  get btnValidate() {
    return $("//*[text()='Validate File']/parent::*");
  }
  get btnSaveQuotation() {
    return $("//*[@id='saveQuotation']");
  }
  get btnOK() {
    return $("//button[text()='OK']");
  }
  get titleReview () {
    return $("//div[text()=' Quotation Review ']");
  }

  get btnRequest () {
    return $("//*[text()='Request to confirm']");
  }
}
export default new QuotationExcel();
