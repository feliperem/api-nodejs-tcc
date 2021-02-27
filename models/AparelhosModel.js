var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AparelhosSchema = new Schema({
    'name': String,
    'comodo': String,
    'movel': Boolean,
    'assinatura': Number,
    'id_user': String,
}, {versionKey:false})

module.exports = mongoose.model('Aparelhos', AparelhosSchema);