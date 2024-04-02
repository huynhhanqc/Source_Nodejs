
class Newsellout 
{
    get PromotionName ()
    {
        return $("//input[@id='name']");
    }
    get Note ()
    {
        return $("#note");
    }
    get FromDate ()
    {
        return $("#fromDate");
    }
    get ChoosefromDate ()
    {
        return $("(//td[@class='today active start-date active end-date available'])[1]");
    }
    get ToDate ()
    {
        return $("//*[@id='toDate']")
    }
    get Choosetodate ()
    {
        return $('//*[@id="kt_body"]/div[7]/div[2]/div[1]/table/tbody/tr[5]/td[1]');
    }
    get Customer ()
    {
        return $("(//span[@role='combobox'])[2]");
    }
    get CusOffline ()
    {
        return $("(//li[@role='option'])[2]");
    }
    get CusStore ()
    {
        return $("(//li[@role='option'])[3]");
    }

    //Promotion Condition (Type Brand)
    get ConditionType ()
    {
        return $("(//span[@role='combobox'])[4]"); //choose type
    }
    get TypeBrand ()
    {
        return $("(//li[@role='option'])[2]"); //brand
    }
    get SelectBrand ()
    {
        return $("(//span[@role='combobox'])[5]");
    }
    get InputBrand ()
    {
        return $("//li[contains(text(),'BIODERMA')]");
    }   
    get Orderminspend ()
    {
        return $("//input[@id='amountMincondtion']");
    }
    get MainProduct ()
    {
        return $("(//span[@role='combobox'])[6]");
    }
    get InputSKU ()
    {
        return $("//input[@type='search']"); 
    }
    get OkaySku ()
    {
        return $("//span[@class='select2-results']//ul"); //choose SKu "100150029"
    }
    get Quantity ()
    {
        return $("(//input[@type='text'])[5]");
    }
    //Promotion value 
    get DiscountValue ()
    {
        return $("//input[@id='discountValue']"); //discount amount
    }
    //Promotion value Precent
    get Typeprecent ()
    {
        return $("(//span[@role='combobox'])[7]");
    }
    get Byprecent ()
    {
        return $("//li[contains(text(),'By Percent')]");
    }
    get MaximumDiscountperOrder ()
    {
        return $("//input[@id='discountAmountMax']");
    }

    // SAVE
    get BtnSavePromotion ()
    {
        return $("(//button[contains(text(),'Save')])[2]");
    }
    //Request To Approve
    get BtnRequest ()
    {
        return $("(//button[@type='button'])[2]");
    }
    
    
    




}
export default new Newsellout();