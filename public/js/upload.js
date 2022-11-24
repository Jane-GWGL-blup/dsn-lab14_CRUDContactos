const btnUpload = document.querySelector('#submit')
const imageResult = document.querySelector('#imagen');
 

btnUpload.addEventListener('click',event => {
    event.preventDefault();
    const file= document.querySelector('#file').files[0]
    const name=document.querySelector('#nombre').value
    const apellido=document.querySelector('#apellido').value
    //const imagen=document.querySelector('#file')
    const email=document.querySelector('#email').value
    const telefono=document.querySelector('#telefono').value
    const direccion=document.querySelector('#direccion').value
    const id = document.querySelector('#_id').value
    
    const formData = new FormData()

    formData.append('imagen', file);
    formData.append('nombre',name)
    formData.append('apellido',apellido)
    formData.append('email',email)
    formData.append('telefono',telefono)
    formData.append('direccion',direccion)
    formData.append('_id',id)
    uploadFile(formData); 
    

})

 const uploadFile = (formData) => {

        fetch('/contactos/addcontacto',{
            method:'POST',
            redirect: 'follow',
            body:formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //imageResult.src = data.Location;
            })
    }; 


const updateFile = (formData) => {

        fetch('/contactos/addcontacto',{
            method:'PUT',
            body:formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //imageResult.src = data.Location;
            })
    }; 