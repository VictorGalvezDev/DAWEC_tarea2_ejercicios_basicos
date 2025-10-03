let boton = document.getElementById("boton")
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let resultado = document.getElementById("resultado")

boton.addEventListener('click', function () {
    let valorNombre = nombre.value
    let valorEdad = edad.value
    let mayoriaedad = (valorEdad < 18) ? "menor" : "mayor";
    resultado.innerHTML = `Hola ${nombre.value}, tienes ${edad.value} años, eres ${mayoriaedad} de edad.`
});