var ComodoModel = require("../models/ComodosModel");

module.exports = {
    createComodo: function(req, res){
        console.log(req.boby);
        let c = new ComodoModel({
            name: req.body.name
        });
        c.save((err, com) =>{
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(com)
            }
        })
    },

    listComodo: function(req, res){
        ComodoModel.find.exec((err, coms)=>{
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(coms)
            }
        })
    }
}