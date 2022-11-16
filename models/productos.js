const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Productos = new Schema ({
        nombre:         { type: String, required: true },
        descripcion:    { type:String, required: true},
        marca:          { type: String, required: true },  
        precio:         { type: Number},
        stock:          { type: Number},  
        imagen:         { type: String}

});

module.exports = mongoose.model('Productos', Productos)