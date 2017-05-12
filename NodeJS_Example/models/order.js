var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var orderSchema = new Schema({
    quantity : Number,
    size : [Schema.Types.Mixed],
    crust : String,
    toppings : Array,
    phone : String,
    address : String,
    price: Number

},{ capped: { size: 100000, max:100} }
);

module.exports = mongoose.model('Order', orderSchema);