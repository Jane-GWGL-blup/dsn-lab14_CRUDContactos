const express = require('express');
const router = express.Router();
const productos = require('../controllers/productos');
const {verifyFile} = require('../middlewares/verifyFile');

//const upload  = require('../controllers/uploadController')

router.get('/', function(req, res){
    productos.list(req,res);
});

router.post('/addproducto', function(req, res) {
    productos.create(req,res);
});


router.post('/cargar', verifyFile, function(req, res){
    productos.upload(req, res);
})


router.get('/deleteproducto/:id', function(req, res) {
    productos.deleteProducto(req,res);
});

module.exports = router;
