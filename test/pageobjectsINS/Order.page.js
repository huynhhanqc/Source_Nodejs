class Order {
  get BtnAddNew() {
    return $("//a[@type='submit']");
  }
  get CheckPhone() {
    return $("#customer_phone_check");
  }
  get Check() {
    return $("#btn_check_cus_phone");
  }
  get City() {
    return $("//select[@name='order_city']");
  }
  get Clickcity() {
    return $("//option[contains(text(),'Hồ Chí Minh')]");
  }
  get OrderAddress() {
    return $("#order_address");
  }
  get SelectStore() {
    return $("//select[@name='pickup_store_id']");
  }
  get ClickStore() {
    return $("//option[normalize-space()='SHOP - 71 HOANG HOA THAM']");
  }
  get BtnCreate() {
    return $("//button[@class='btn btn-primary btn-sm']");
  }
}
export default new Order();
