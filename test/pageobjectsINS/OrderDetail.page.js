class OrderDetail {
  get ShippingAddress() {
    return $("//textarea[@name='order_address']");
  }
  get Shipping() {
    return $("//*[@name='order_shipper_id']");
  }
  get ClickShipping() {
    return $("//option[normalize-space()='Hasaki Now']");
  }
  get SaveInfor() {
    return $("//a[@id='btn_frmOrderInfoSM']");
  }
  get Note() {
    return $("#order_note");
  }
  get SelectSku() {
    return $("//*[@role='combobox']");
  }
  get InputSku() {
    return $("//input[@class='select2-search__field']");
  }
  get ClickSku() {
    return $("//ul[@role='tree']//li[@role='treeitem']");
  }
  get Qty() {
    return $("#add_item_qty");
  }
  get AddItem() {
    return $("#btn_add_item");
  }
  get SaveDetail() {
    return $("//button[@id='btn_frmOrderDetailSM']");
  }
  get TextOrder() {
    return $("//section[@class='content-header']");
  }
  get Status2() {
    return $(
      "//div[@class='col-md-8']//button[@onclick='validateOrderStatus(2)']"
    );
  }
}
export default new OrderDetail();
