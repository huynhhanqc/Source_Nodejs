class PopupDeliveryStatus 
{
    get TabApprove ()
    {
        return $("//*[text()='Approved(']/parent::*");
    }
    get BtnSetDelivery ()
    {
        return $("//*[@id='btnOpenSetDeliveryModal']");
    }
    get CheckBoxAll ()
    {
        return $("//*[@class='form-check-input']/parent::*");
    }
    get TabApprove ()
    {
        return $("//*[text()='Approved(']/parent::*");
    }



}
export default new PopupDeliveryStatus ();
