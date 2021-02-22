var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AparelhosSchema = new Schema({
    'name': String,
    'comodo': String,
    'movel': Boolean,
    'assinatura': Number
}, {versionKey:false})

module.exports = mongoose.model('Aparelhos', AparelhosSchema);