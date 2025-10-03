let boton = document.getElementById("boton")
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let resultado = document.getElementById("resultado")

boton.addEventListener('click', function () {
    let menornum = Math.min(num1.value, num2.value, num3.value)
    resultado.innerHTML = `El menor número introducido es: ${menornum}`
});