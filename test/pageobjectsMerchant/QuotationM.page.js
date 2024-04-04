class QuotationM {
  get MenuQuotation() {
    return $("(//span[@class='menu-title'])[4]");
  }
  get CreateQuotation() {
    return $("(//span[@class='menu-title'])[6]");
  }
  get Receiving() {
    return $("#receivingTime");
  }
  get ChooseDate() {
    return $("//div[@class='flatpickr-innerContainer']//span[10]");
  }
  get QuotationType() {
    return $("(//span[@role='combobox'])[1]");
  }
  get TypeTester() {
    return $("(//li[@role='option'])[2]");
  }
  get RequireVAT() {
    return $("#quotationConfig");
  }
  get Note() {
    return $("#quotationNote");
  }
  get Store() {
    return $("(//span[@role='combobox'])[2]");
  }
  get Inputtore() {
    return $("//ul[@role='listbox']//li[5]");
  }
  get Product() {
    return $("(//span[@role='combobox'])[3]");
  }
  get Inputsku() {
    return $("//input[@role='searchbox']");
  }
  get Inputsku() {
    return $("//input[@role='searchbox']");
  }
  get Acceptsku() {
    return $("//ul[@role='listbox']//div[4]");
  }
  get Quantity() {
    return $("#qty_1");
  }
  get Discount() {
    return $("#discount_1");
  }
  get Type() {
    return $("#discount_type_1");
  }
  get Typevnd() {
    return $("//select[@id='discount_type_1']//option[2]");
  }
  get Acction() {
    return $("//td[@class='text-center']//i");
  }
  get Addnewrow() {
    return $("#addRow");
  }
  get Btncancel() {
    return $("//a[@class='btn btn-secondary btn-sm']//i");
  }
  get Btnsave() {
    return $("#btnSaveQuotationDetail");
  }
  get Pupok() {
    return $("//div[@class='swal2-actions']//button[1]");
  }
  get BtnResqst() {
    return $("//div[@class='card-toolbar']//a[3]");
  }
}
export default new QuotationM();
