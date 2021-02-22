var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/PersonController");
var ProductController = require("../controllers/ProductController");
var AuthController = require('../controllers/AuthController');
var ComodoController = require('../controllers/ComodoController');
//var AparelhosController = require('../controllers/AparelhosController');

router.use(AuthController.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

router.post('/comodos', ComodoController.createComodo);
router.get('/comodos', ComodoController.listComodo);



//router.get('/aparelhos', AparelhosController);

module.exports = router;