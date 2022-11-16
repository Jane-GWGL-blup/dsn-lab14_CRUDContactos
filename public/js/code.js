function fill_form(producto) {
        
    const dataProducto = JSON.parse(producto);  
    
    document.getElementById("nombre").value=dataProducto.nombre;
    
    document.getElementById("descripcion").value=dataProducto.descripcion;
   
    document.getElementById("marca").value=dataProducto.marca;
   
    document.getElementById("precio").value=dataProducto.precio;
  
    document.getElementById("stock").value=dataProducto.stock;
    
    document.getElementById("file").files[0]=dataProducto.imagen;
    
    document.getElementById("_id").value=dataProducto._id;
};