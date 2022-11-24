const express = require('express');
const router = express.Router();
const contactos = require('../controllers/contactos');
const {verifyFile} = require('../middlewares/verifyFile');

//const upload  = require('../controllers/uploadController')

router.get('/', function(req, res){
    contactos.list(req,res);
});

router.post('/addcontacto', function(req, res) {
    contactos.create(req,res);
});


router.post('/cargar', verifyFile, function(req, res){
    contactos.upload(req, res);
})


router.get('/deletecontacto/:id', function(req, res) {
    contactos.deleteContacto(req,res);
});

module.exports = router;
