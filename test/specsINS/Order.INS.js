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
    await order.OrderAddress.setValue("555 duong 3/2 quan 10");
    await order.SelectStore.click();
    await order.ClickStore.click();
    await order.BtnCreate.click();
    await orderdetail.ShippingAddress.setValue("555 duong 3/2 quan 10");

    await browser.pause(15000);
  });
});
