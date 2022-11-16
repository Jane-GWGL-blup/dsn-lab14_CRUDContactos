const btnUpload = document.querySelector('#submit')
const imageResult = document.querySelector('#imagen');
 

btnUpload.addEventListener('click',event => {
    event.preventDefault();
    const file= document.querySelector('#file').files[0]
    const name=document.querySelector('#nombre').value
    const descripcion=document.querySelector('#descripcion').value
    //const imagen=document.querySelector('#file')
    const marca=document.querySelector('#marca').value
    const precio=document.querySelector('#precio').value
    const stock=document.querySelector('#stock').value

     const formData = new FormData()

    formData.append('imagen', file);
    formData.append('nombre',name)
    formData.append('descripcion',descripcion)
   // formData.append('imagen',imagen)
    formData.append('marca',marca)
    formData.append('precio',precio)
    formData.append('stock',stock) 
    console.log(name)
    uploadFile(formData); 
    

})

 const uploadFile = (formData) => {

        fetch('/productos/addproducto',{
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

        fetch('/productos/addproducto',{
            method:'PUT',
            body:formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //imageResult.src = data.Location;
            })
    }; 