var AparelhosModel = require("../models/AparelhosModel");

module.exports = {

    addAparelho: function(req, res){
        let p = new AparelhosModel({
            name: req.body.name,
            comodo: req.body.comodo,
            movel: req.body.movel,
            assinatura: req.body.assinatura,
            id_user: req.body.id_user
        });
        p.save((err, apar) => {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).send(apar)
            }
        })

    },

    listAparelhos: function(req, res) {
        let id_user = req.params.id_user;
        AparelhosModel.find({id_user: id_user}, (err, apar) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(apar);
            }
        })
    },

    deleteAparelhos: function(req, res) {
        AparelhosModel.deleteOne({_id: req.params.id}, (err) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).send();
            }
        })
    },

    editAparelhos: function(req, res) {
        AparelhosModel.findById(req.params.id, (err, apar) => {
            if (err) {
                res.status(500).send(err);
            } else if (!apar) {
                res.status(404).send({});
            } else {
                apar.name = req.body.name;
                apar.comodo = req.body.comodo;
                apar.movel = req.body.movel;
                apar.save((err, apar) => {
                    if(err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(apar);
                    }
                });
            }
        })
    }
}