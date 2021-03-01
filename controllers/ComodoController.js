var ComodoModel = require("../models/ComodosModel");
var AparelhosModel = require("../models/AparelhosModel");

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

    deleteComodo: async function(req, res) {
        try{
            let id = req.params.id;
            let apars = await AparelhosModel.find({comodo: id}).exec();
            if(apars.length > 0){
                res.status(500).send({
                    msg: "Você não pode remover este Cômodo"
                })
            } else {
                await ComodoModel.deleteOne({_id: id});
                res.status(200).send({});
            }
        } catch(err) {
            res.status(500).send({msg: "Internal error", error: err})
        }
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