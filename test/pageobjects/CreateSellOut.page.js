class Createsellout 
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
        return $("//td[@class='weekend available'][normalize-space()='30']");
    }
    get ToDate ()
    {
        return $("//*[@id='toDate']")
    }
    get Choosetodate ()
    {
        return $("//td[@class='weekend available'][normalize-space()='30']");
    }
    get Customer ()
    {
        return $("");
    }
    //Promotion Condition
    get ConditionType ()
    {
        return $("");
    }
    get MainProduct ()
    {
        return $("//span[@id='select2-productSkuCondition_1-container']");
    }
    get OkaySKU ()
    {
        return $("//div[@class='select2-result-repository__forks'][normalize-space()='SKU: 100150029']"); //Choose SKU"100150029"
    }




}
export default new Createsellout();