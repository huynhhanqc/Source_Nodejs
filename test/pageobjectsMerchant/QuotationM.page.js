class QuotationM {
  get SelectTime () {
    return $("//*[@id='receivingTime']")
  }
  get SetTime () {
    return $("//*[@class='flatpickr-day 'and text()='29']")
  }
  get QuotationType () {
    return $(
      "//*[@aria-labelledby='select2-quotationType-container']/parent::*"
    )
  }
  get TypeTester () {
    return $("(//li[text()='Tester']/parent::*)[1]")
  }
  get TypeGift () {
    return $("(//li[text()='Gift']/parent::*)")
  }
  get RequireVAT () {
    return $("//*[@id='quotationConfig']/parent::*")
  }
  get Note () {
    return $("//*[@id='quotationNote']")
  }
  get Store () {
    return $("//*[@id='select2-store_1-container']/parent::*")
  }
  get MultiStores () {
    return $("//*[@role='option'and text()='MULTI STORES']")
  }
  get StoreLVQ () {
    return $("//*[@role='option'and text()='SHOP - 304 LE VAN QUOI']")
  }
  get StoreLVQLTT () {
    return $("//*[@role='option'and text()='SHOP - 104 LE TRONG TAN']")
  }
  get StoreLVQPVT () {
    return $("//*[@role='option'and text()='SHOP - 447 PHAN VAN TRI']")
  }
  get Product () {
    return $("//*[text()='Search for a product']/parent::span");
  }
  get Inputsku () {
    return $("//input[@role='searchbox']")
  }
  get Acceptsku () {
    return $("//ul[@role='listbox']//div[4]")
  }
  get Quantity () {
    return $('#qty_1')
  }
  get Discount () {
    return $('#discount_1')
  }
  get Type () {
    return $('#discount_type_1')
  }
  get Typevnd () {
    return $("//*[text()=' VND']")
  }
  get Acction () {
    return $(
      "//*[@class='bi bi-dash-circle-fill red icon-delete fa-lg']/parent::*"
    )
  }
  get Addnewrow () {
    return $('#addRow')
  }
  get Btncancel () {
    return $("//a[@class='btn btn-secondary btn-sm']//i")
  }
  get Btnsave () {
    return $('#btnSaveQuotationDetail')
  }
  get Pupok () {
    return $("//div[@class='swal2-actions']//button[1]")
  }
  get BtnResqst () {
    return $("//div[@class='card-toolbar']//a[3]")
  }
  get TextCode () {
    return $("//div[@class='card-body bg-light-info']//p[1]")
  }

  // Quotation All Store
  get ZoneBd () {
    return $("//input[@id='checkbox_1']");
  }
  get BtnUseStore () {
    return $("//*[@id='btnUseStore']");
  }
  get BtnAllocate ()
  {
    return $("//*[@onclick='openAllocateQtyModal(1)']");
  }
  get BtnCloseAllocate ()
  {
    return $("//button[text()='Close']");
  }
  get SalesAllocationbyOrder ()
  {
    return $("//input[@id='allocationMethod_2']");
  }
  
}
export default new QuotationM()
