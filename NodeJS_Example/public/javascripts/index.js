$(function ready() {
    $("#orderForm").submit(function (event) {
        event.preventDefault();

// Please refer to README.txt for a question on this block
var extras =  parseInt($('input[name=toppings]:checked').length);
var qty = $('#quantity').val();
var base = parseInt([$('input[name=size]:checked').val()]);
var orderBeforeTax = (base + extras) * qty;              
var taxes = orderBeforeTax  * 0.05;                     
                            
var total = orderBeforeTax + taxes; 


        var orderInfo = JSON.stringify({
            quantity: $('#quantity').val(),
            size: [$('input[name=size]:checked').val(),$('input[name=size]:checked').attr("id")],
            crust: $('input[name=crust]:checked').val(),
            toppings: $('input[name=toppings]:checked').map(function(){
                            return this.value;
                        }).get(),
            phone: $('#phone').val(),
            address: $('#address').val(),
            price: total,
            
        });

        $.ajax({
            url: '/api/orders',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: orderInfo,
            success: function (json, status, request) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-success');
                $('#statusMsg').html('Your order has been recieved');
            },
            error: function (request, status) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-danger');
                $('#statusMsg').html('Error with your order');
                console.log('Request failed : ', status);
            }
        });

    });
    
});