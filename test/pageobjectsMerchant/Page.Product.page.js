class PageProduct
{
get Productpage ()
{
    return $("(//a[@class='menu-link']//span[@class='menu-title'])[14]");
}
get AddNewProductPage ()
{
    return $("(//div[@class='menu-item']//a[@id='create'])[2]");
}


}
// export default new PageProduct();