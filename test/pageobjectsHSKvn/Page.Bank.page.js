class PageBank 
{
    get Forename ()
    {
        return $("#bill_to_forename");
    }
    get Surname ()
    {
        return $("#bill_to_surname");
    }
    get Address ()
    {
        return $("#bill_to_address_line1");
    }
    get City ()
    {
        return $("#bill_to_address_city")
    }
    get Phone ()
    {
        return $("#bill_to_phone");
    }
    get Email ()
    {
        return $("#bill_to_email");
    }
    // Card Type
    get Visa ()
    {
        return $("#card_type_001");
    }
    get Master ()
    {
        return $("#card_type_002");
    }
    get JCB ()
    {
        return $("#card_type_007");
    }
    get CardNumber ()
    {
        return $("#card_number");
    }
    get ExpiryMonth ()
    {
        return $("#card_expiry_month")
    }
    get Month ()
    {
        return $("//option[@value='01']")
    }
    get ExpiryYear ()
    {
        return $("#card_expiry_year");
    }
    get Year ()
    {
        return $("//option[@value='2045']");
    }
    get CVN ()
    {
        return $("#card_cvn");
    }
    get CommitBank ()
    {
        return $("//input[@name='commit']");
    }
    get Endcommit ()
    {
        return $("//input[@name='commit']");
    }






}
export default new PageBank();