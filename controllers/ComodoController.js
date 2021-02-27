var ComodoModel = require("../models/ComodosModel");

module.exports = {
    createComodo: function(req, res){
        console.log(req.boby);
        let c = new ComodoModel({
            name: req.body.name,
            id_user: req.body.id_user
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
        let id_user = req.params.id_user;
        ComodoModel.find({id_user: id_user}, (err, coms) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(coms);
            }
        })
    },

    deleteComodo: function(req, res) {
        let id = req.params.id;
        ComodoModel.deleteOne({_id: id}, (err) => {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).send({});
            }
        })
    },

    editComodo: function(req, res) {
        ComodoModel.findById(req.params.id, (err, com) => {
            if(err){
                res.status(500).send(err);
            } else if (!com) {
                res.status(404).send({});
            } else {
                com.name = req.body.name;
                com.save()
                    .then((d) => res.status(200).send(d))
                    .catch((e) => res.status(500).send(e));
            }
        })
    }
}