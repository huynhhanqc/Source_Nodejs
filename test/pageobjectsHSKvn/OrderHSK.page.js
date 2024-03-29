class OrderHSK 
{
    get SearchSku ()
    {
        return $("#search");
    }
    get BtnSearch ()
    {
        return $("//button[@class='btn_submit_search']");
    }
    get BtnAddCart ()
    {
        return $("//span[contains(text(),'Giỏ hàng')]");
    }
    get Bynow ()
    {
        return $("#buy-now");
    }
    get BtnOrder ()
    {
        return $("(//button[@type='button'])[9]");
    }
    get TextOder ()
    {
        return $("//p[@class='text-sm font-normal']");
    }


}
export default new OrderHSK ();