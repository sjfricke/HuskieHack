(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var OrderSchema = new Schema({
        customerID: Number,
        orderID: Number,
        
        description: String,
        PO: String,
        attn: String,
        orderDate: Date,
        dueDate: Date,
        taxed: Boolean,
        specialInstruction: String,
        giftAndKind: Boolean,
        
        deliveryMethod: {
            delivery: Boolean,
            pickUp: Boolean,
            ship: Boolean
        },
       
        deliveryNote: String,
        
        pickUpTime: String,
        pickUpName: String,
        
        shipName: String,
        shipAddress1: String,
        shipAddress2: String,
        shipAddress3: String,
        shipState: String,
        shipCity: String,
        shipZip: String,
        
        subTotal: Number,
        netTotal: Number,
        paymentDate: Date,
        
        message: String,
        
        invoice: Boolean,
            invoiceDate: Date,
        paid: Boolean,
            datePaid: Date
           
    });

module.exports = mongoose.model('Order', OrderSchema);

})();