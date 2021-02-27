var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ComodosSchema = new Schema({
    'name': String,
    'id_user': String,
}, {versionKey:false})

module.exports = mongoose.model('Comodo', ComodosSchema);