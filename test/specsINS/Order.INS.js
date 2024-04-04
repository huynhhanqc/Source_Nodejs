import loginIns from "../pageobjectsINS/LoginINS.page.js";
import pagesale from "../pageobjectsINS/Page.Sales.page.js";
import order from "../pageobjectsINS/Order.page.js";
import orderdetail from "../pageobjectsINS/OrderDetail.page.js";

describe("Order Web Inside", async () => {
  before(async () => {
    await browser.url("https://inside.hasaki.vn:sbd4Jnws7l@test.inshasaki.com");
    await browser.maximizeWindow();
    await loginIns.Loginins("hanhvt@hasaki.vn", "hasaki123@");
    await browser.pause(1000);
  });
  after(async () => {
    browser.closeWindow();
  });
  it("Order Succsess", async () => {
    await pagesale.Pagesales.click();
    await expect(pagesale.Pagesales).toBeDisplayed();
    await pagesale.PageOrders.click();
    await order.BtnAddNew.click();
    await order.CheckPhone.setValue("0344535989");
    await order.Check.click();
    await browser.pause(1000);
    await order.OrderAddress.setValue("555 duong 3/2 quan 10");
    await browser.pause(1000);
    await order.SelectStore.click();
    await order.ClickStore.click();
    await order.BtnCreate.click();
    await orderdetail.ShippingAddress.setValue("555 duong 3/2 quan 10");
    await orderdetail.Shipping.click ();
    await orderdetail.ClickShipping.click ();
    await orderdetail.Note.setValue ("Han Test Order");
    await orderdetail.SaveInfor.click ();
    await browser.pause(2000);
    await orderdetail.SelectSku.click ();
    await orderdetail.InputSku.setValue("100190113");
    await browser.pause(2000);
    await orderdetail.ClickSku.click ();
    await browser.pause(2000);
    await orderdetail.Qty.clearValue();
    await orderdetail.Qty.setValue("5");
    await browser.pause(2000);
    await orderdetail.AddItem.click ();
    await orderdetail.SaveDetail.click ();
    await expect(orderdetail.SaveDetail).toBeDisplayedInViewport();
    await orderdetail.TextOrder.getText();
    await orderdetail.Status2.click ();
    await browser.saveScreenshot('./test/screenshot.png');




    await browser.pause(7000);
  });
});
