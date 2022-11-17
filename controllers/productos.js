const { errorMonitor } = require('events');
const { getBuckets,uploadToBucket,deleteObject } = require("../helpers/s3")
const path = require('path');
const Producto = require('../models/productos');

module.exports.upload = async (req, res ) => {
        console.log(req);
        const bucket = req.body.bucket
        const file = req.files.file;
        console.log("uploadToBucket")
        const result = await uploadToBucket(bucket, file);
        res.json(result)
    };
    

exports.index = function (req, res) {
        
    res.sendFile(path.resolve('views/productos.html'));
};

exports.create = async (req, res) => {
        const { nombre, descripcion, marca, precio, stock, file, _id } = req.body;
    
        console.log(req);
        console.log(req.body._id);
        console.log(_id);

       if (req.body._id) {
                console.log("ID: "+ req.body._id);
                updateProducto(req);
                const bucket = 's3-bucket-nclab09'
                const file = req.files.imagen
                console.log("New Product")
                const result = await uploadToBucket(bucket, file);
                await Producto.findByIdAndUpdate(_id, {
                        nombre: nombre,
                        descripcion: descripcion,  
                        marca: marca,
                        precio: precio,
                        stock: stock,
                        imagen: result.Location,    
                }, { new: true });
                res.redirect('/productos');
        
        } else {
        //
        console.log(req);
        const bucket = 's3-bucket-nclab09'
        const file = req.files.imagen
        console.log("New Product")
        const result = await uploadToBucket(bucket, file);
        //res.json(result)
        //
        saveNewData(req,result.Location,res)

    }
    
};

const saveNewData = (req, url, res) => {

        
        var newProducto = new Producto({
                nombre:req.body.nombre,
                descripcion:req.body.descripcion,
                marca:req.body.marca,
                precio:req.body.precio,
                stock:req.body.stock,
                imagen:url,
        });
        
        newProducto.save( function (err) {
                if(err) {
                console.log(err)
                res.status(400).render('errorproducto')    
               
            } else { 
                console.log("new Producto "+newProducto);
                //console.log(req.body)
                res.redirect('/productos');
            }
      });
}

const updateProducto = (req) => {
        const  id  = req.params.id;
        Producto.findById({_id:id}).exec(function(err, productos){
                if(err){
                        console.log(err)
                }else{
                        const imageName = productos.imagen.split('/')
                        console.log(imageName[3])
                        let params = {  Bucket: 's3-bucket-nclab09', Key: imageName[3] };              
                        deleteObject(params);

    
                       
                }
        })
}

exports.deleteProducto = async (req, res) => {
        const  id  = req.params.id;
        Producto.findById({_id:id}).exec(function(err, productos){
                if(err){
                        console.log(err)
                }else{
                        const imageName = productos.imagen.split('/')
                        console.log(imageName[3])
                        let params = {  Bucket: 's3-bucket-nclab09', Key: imageName[3] };
                        Producto.findByIdAndRemove(id,function(err, producto){
                                if(err){
                                        return res.send(500, err);
                                }
                                        
                                deleteObject(params);
                                res.redirect('/productos');
                                console.log("Producto eliminado")
                                
                        });
                }
        })
        console.log("Entre al delete")
        console.log("ID: "+ id)
        
        
    }

exports.list = async (req, res) => {

        Producto.find({}).exec(async (err, productos) => {
                if (err) {
                        return res.send(500, err);
                }

                const data = await getBuckets();
                console.log(data.Buckets);

                res.render('getproducto', {
                        productos: productos,
                        buckets:data.Buckets
             });
        });
};
