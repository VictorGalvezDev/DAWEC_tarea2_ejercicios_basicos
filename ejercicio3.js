let boton = document.getElementById("boton")
let num1 = document.getElementById("num1");
let resultado = document.getElementById("resultado")

boton.addEventListener('click', function () {
    let valornum1 = num1.value
    if (Number.isNaN(valornum1) || Number(valornum1) < 0) {
        resultado.innerHTML = "tienes que introducir un numero mayor de 0";
        return;
      } else {
        valornum1 = Number(valornum1)
      }
    
    let sumatotal = 0
    for (let i = valornum1; i > 0; i--) {
        sumatotal += i 
    }
    resultado.innerHTML = `El menor número introducido es: ${sumatotal}`
});