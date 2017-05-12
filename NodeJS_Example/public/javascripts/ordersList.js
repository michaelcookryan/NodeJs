$(function ready() {

    $.getJSON("/api/orders", function (data) {
        data.forEach(function (item) {

            $('#orders').append('<tr><td>' + item.phone + 
            '</td><td>' + item.quantity + 
            '</td><td>' + item.size[1] + 
            '</td><td>' + item.crust + 
            '</td><td>' + item.toppings + 
            '</td><td>' + item.address + 
            '</td><td>' + "$" + item.price + '</td></tr>');
               
            });
        });
});
