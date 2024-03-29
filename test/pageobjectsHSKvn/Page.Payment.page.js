class Payment 
{
// Delivery address
    get Deliveryaddress ()
    {
        return $("(//button[@type='button'])[1]");
    }
// Payments
    get ChangePay ()
    {
        return $("//*[@role='radiogroup']/../button");
    }
    get Option2 () //Payment by Visa, Master international card
    {
        return $("#payment-option-2");
    }
    get BtnSubmitCard ()
    {
        return $("//button[@type='submit']");
    }
//Purchase voucher
    get ChooseVoucher ()
    {
        return $("//button[contains(text(),'Chọn phiếu mua hàng')]");
    }
    get ClickSelectTicket ()
    {
        return $("//button[@id=':r2g:-form-item']");
    }
    


//Discount code
    //....//
//Package information
    //....//
    get BtnSubmitPay ()
    {
        return $("(//button[@type='button'])[9]");
    }






}
export default new Payment ();