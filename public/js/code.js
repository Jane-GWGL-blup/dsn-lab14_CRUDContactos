function fill_form(contacto) {
        
    const dataContacto = JSON.parse(contacto);  
    
    document.getElementById("nombre").value=dataContacto.nombre;
    document.getElementById("apellido").value=dataContacto.apellido;
    document.getElementById("email").value=dataContacto.email;
    document.getElementById("telefono").value=dataContacto.telefono;
    document.getElementById("direccion").value=dataContacto.direccion;
    document.getElementById("file1").files[0]=dataContacto.imagen
    document.getElementById("_id").value=dataContacto._id;
};