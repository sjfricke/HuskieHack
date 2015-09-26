(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var JobSchema = new Schema({
        orderID: Number,
        
        jobType: {
            printed: Boolean,
            mailingPrep: Boolean,
            postage: Boolean,
            donation: Boolean        
        },
        
        quantity: Number,
        description: String,
        
        printType: {
            envelope: Boolean,
            paper: Boolean,
            booklet: Boolean
        },
        
        envelopeType: String,
        
        paperType: {
            weight: String,
            part: Number,
            color: String,
            size: String,
            side1Type: String,
            side1Color: String,
            side2Type: String,
            side2Color: String
          },
        
        bookletType: {
            pages: String,
            includeCover: Boolean,
            finalSize: String,
            coverWeight: String,
            coverColor: String,
            coverPressSheetSize: String,
            coverSide1Type: String,
            coverSide1Color: String,
            coverSide2Type: String,
            coverSide2Color: String,
            insideWeight: String,
            insideColor: String,
            insideSize: String,
            insideSide1Type: String,
            insideSide1Color: String,
            insideSide2Type: String,
            insideSide2Color: String
        },
        
        artWorkDesign: String,
        
        consecutiveStart: Number,
        consecutiveEnd: Number,
        
        assembly: {
            fold: String,
            binding: String,
            padding: String,
            cornerStitch: Boolean,
            collate: Boolean,
            drillingHoles: String,
            score: String,
            perf: String,
            insert: String,
            other: String,
          }
    });

module.exports = mongoose.model('Job', JobSchema);

})();