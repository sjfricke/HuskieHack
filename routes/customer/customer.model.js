(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        name: String,
        customerID: Number,
        contactName: String,
        address1: String,
        address2: String,
        address3: String,
        state: String,
        city: String,
        zip: String,
        phone1: String,
        phone2: String,
        email1: String,
        email2: String,
        directContact: String,
        note: String
    });

module.exports = mongoose.model('Customer', CustomerSchema);

})();