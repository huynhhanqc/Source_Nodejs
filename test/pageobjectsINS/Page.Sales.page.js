class PageSales 
{
    get Pagesales ()
    {
        return $("(//li[@class='treeview']//*[text()='Sales'])[1]");
    }
    get PageOrders ()
    {
        return $("(//ul[@class='treeview-menu menu-open']//a)[2]");
    }
    
    
}
export default new PageSales();