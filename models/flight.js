var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: { 
        type: String, 
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: { 
        type: Number, 
        min: 10,
         max: 9999
         },
    departs: Date,
})

module.exports = mongoose.model('Flight', flightSchema)