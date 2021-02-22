var AparelhosModel = require("../models/AparelhosModel");

module.exports = {
    all: function(req, res){
        AparelhosModel.find({}).lean().exec(function(err, aparelhos){
            if (err){
                return res.json(['Falha na comunicação']);
            }
            return res.json(aparelhos);
        })
    }
}