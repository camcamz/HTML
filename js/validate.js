const form = document.getElementById('form')



form.addEventListener('submit', e => {
    e.preventDefault()
    
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const direccion = document.getElementById('direccion').value
    const telefono = document.getElementById('telefono').value
    const email = document.getElementById('email').value 

    if(nombre === '' && apellido === '' && direccion === '' && telefono === ''){
        Swal.fire({
            title: 'Cuidado !',
            text: 'Tiene que completar todos los campos',
            icon: 'warning',
            confirmButtonText: 'Reintentar'
            })
    }else{
        Swal.fire({
            title: 'Datos enviados !',
            icon: 'succes',
            confirmButtonText: 'Okay'
        })
    }
    
})
