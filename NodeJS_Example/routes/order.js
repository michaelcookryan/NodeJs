var express = require('express');
var router = express.Router();

var Order = require('../models/order');
var PriceCalculator = require('../calculator/priceCalculator');

router.get('/', function(req, res){
   res.render('index', {'title' : 'Make an order:'});
});

router.get('/ordersList', function(req, res){
   res.render('ordersList', {'title' : 'Orders Made'});
});

//REST API
router.get('/api/orders', function(req, res){
    Order.find({}, function(err, orders){
       if(err) {
            return res.status(500).json({error : "Failed to get all of the orders"});
       }
       res.json(orders);
    });
});

router.post('/api/orders', function(req, res){  
    var order = new Order(req.body);

   order.save(function(err){
       if(err) {
           return res.status(500).json({error : "Failed to save your order"});
       }
   });

   res.json({msg: "success"});
});

module.exports = router;