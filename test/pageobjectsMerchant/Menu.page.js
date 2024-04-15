class MenuMC 
{
    get MenuQuotation ()
    {
        return $("//*[text()='Quotation']/parent::a");
    }
    get CreateQuotation ()
    {
        return $("//*[text()='Create Quotation']/parent::a");
    }
    get CreateQuotationExcel()
    {
        return $("//*[text()='Create Quotation by Excel']/parent::a");
    }
    get  MenuProduct ()
    {
        return $("//*[text()='Products']/parent::a");
    }
    get AddNewProduct ()
    {
        return $("//*[text()='Add New Product']/parent::a");
    }
    get MenuPromotionProgram ()
    {
        return $("//*[text()='Promotions Program']/parent::a");
    }
    get CreatePromotion ()
    {
        return $("//*[text()='Promotions Program']/parent::*/parent::*//*[text()='Add New Promotion']/parent::a");
    }
    

}
export default new MenuMC();