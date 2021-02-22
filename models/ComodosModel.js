var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ComodosSchema = new Schema({
    'name': String,
}, {versionKey:false})

module.exports = mongoose.model('Comodo', ComodosSchema);