function validarFormulario() {
    let CampoA = document.getElementById("Campo-A").value
    let CampoB = document.getElementById("Campo-B").value

    if (CampoB>CampoA) {
        alert ("formulario valido")

    } else{
        alert ("formulario invalido")
    }
}