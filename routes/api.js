var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/PersonController");
var ProductController = require("../controllers/ProductController");
var AuthController = require('../controllers/AuthController');
var ComodoController = require('../controllers/ComodoController');
var AparelhosController = require('../controllers/AparelhosController');

router.use(AuthController.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

//Requisições dos cômodos
router.post('/comodos', ComodoController.createComodo);
router.get('/comodos/:id_user', ComodoController.listComodo);
router.delete('/comodos/:id', ComodoController.deleteComodo);
router.patch('/comodos/:id', ComodoController.editComodo);

//Requisições dos aparelhos
router.post('/aparelhos', AparelhosController.addAparelho);
router.get('/aparelhos/:id_user', AparelhosController.listAparelhos);
router.delete('/aparelhos/:id', AparelhosController.deleteAparelhos);
router.patch('/aparelhos/:id', AparelhosController.editAparelhos);

module.exports = router;