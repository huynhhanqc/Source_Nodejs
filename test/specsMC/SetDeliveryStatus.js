import LoginPageMC from "../pageobjectsMerchant/LoginMC.page.js";
import MenuMC from "../pageobjectsMerchant/MenuMC.page.js";
import PopupDeliveryStatus from "../pageobjectsMerchant/SetDeliveryStatus.page.js";

describe("Set Delivery Time PO ", async () => {
  before(async () => {
    await LoginPageMC.open();
    await browser.maximizeWindow();
    await LoginPageMC.Login();
    await browser.pause(1000);
  });
  after(async () => {
    await browser.closeWindow();
  });
  it("Check Tab Approve", async () => {
    await MenuMC.MenuPO.click();
    await MenuMC.PurchaseOrders.click();
    await PopupDeliveryStatus.TabApprove.click();
  });

  it("Check Click Btn Set Delevery", async () => {
    await PopupDeliveryStatus.TabApprove.click();
    await PopupDeliveryStatus.BtnSetDelivery.click();
  });
});
