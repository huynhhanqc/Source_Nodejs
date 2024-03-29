class AddProduct
{
// Tab Product Info
get NameProd ()
{
    return $("#name");
}
get VenProdName ()
{
    return $("#venprod_name");
}
get Barcode ()
{
    return $("#barcode");
}
get SelectBrand ()
{
    return $("//span[@role='combobox']");
}
get InputBrand ()
{
    return $("//li[contains(text(),'BIODERMA')]");
}
get VenProdCode ()
{
    return $("#venprod_code");
}
get VenPrice ()
{
    return $("#venprod_price");
}
get MarPrice ()
{
    return $("#market_price");
}
get HasakiPrice ()
{
    return $("#price");
}
get DiscountOffline ()
{
    return $("#discountOffline");
}
get DiscountOnline ()
{
    return $("#discountOnline");
}
get Length ()
{
    return $("#plength");
}
get Width ()
{
    return $("#width");
}
get Height ()
{
    return $("#height");
}
get Weight ()
{
    return $("#weight");
}
get SaveNext ()
{
    return $("#btnSaveProductDetail");
}


}
// export default new AddProduct();