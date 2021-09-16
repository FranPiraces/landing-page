

$('form').submit((e) => {

    e.preventDefault()



    const correo = $('#correo').val()
    const eleccion =$('#eleccion').val()
    const frecuencia =$('#frecuencia').val()
    const copucha = $('#copucha').val()
    const genero = $('input[name="genero"]').val()




    const formValue = {
        "correo": correo,
        "eleccion": eleccion,
        "frecuencia": frecuencia,
        "copucha": copucha,
        "genero": genero
    }
    console.log(formValue)

})