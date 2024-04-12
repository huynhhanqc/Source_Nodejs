class QuotationExcel 
{
    get pageExcel ()
    {
        return $("//*[text()='Create Quotation by Excel']/parent::a[@id='import']");
    }
    get receivingTime ()
    {
        return $("");
    }
    get quotationType ()
    {
        return $("");
    }
    get requireVat ()
    {
        return $("");
    }
    get note ()
    {
        return $("");
    }
    get uploadexcel ()
    {
        return $("//input[@id='excelFile']/parent::*");
    }
    get importbysku ()
    {
        return $("//div[@class='import-type']//label[text()='Import by sku']");
    }
    get importbyBarcode ()
    {
        return $("//div[@class='import-type']//label[text()='Import by barcode']");
    }
    get btnValidate ()
    {
        return $("//*[text()='Validate File']/parent::*");
    }












}
export default new QuotationExcel();