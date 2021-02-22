var ProductModel = require("../models/ProductModel");

module.exports = {
    all: function(req, res){
        ProductModel.find({}).lean().exec(function(err, products){
            if (err){
                return res.json(['Falha na comunicação']);
            }
            return res.json(products);
        })
    }
}