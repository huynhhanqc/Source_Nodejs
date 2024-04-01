class OrderHSK 
{
    get SearchSku ()
    {
        return $("//input[@id='search']");
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
    get ContinueOder () //Tiếp tục mua hàng
    {
        return $("(//span[@class='font-sans text-lg font-bold'])[1]");
    }


}
export default new OrderHSK ();