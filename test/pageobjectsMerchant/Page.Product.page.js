class PageProduct
{
get Productpage ()
{
    return $("(//div[@id='menu-item-product']//span[@class='menu-title'])[1]");
}
get AddNewProductPage ()
{
    return $("//span[contains(text(),'Add New Product')]");
}


}
export default new PageProduct();