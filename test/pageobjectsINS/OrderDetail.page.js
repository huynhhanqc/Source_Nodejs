class OrderDetail 
{
get ShippingAddress ()
{
    return $("//textarea[@name='order_address']");
}


}
export default new OrderDetail ();