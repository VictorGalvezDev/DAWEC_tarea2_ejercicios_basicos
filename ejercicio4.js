let boton = document.getElementById("boton")
let num = document.getElementById("num");
let resultado = document.getElementById("resultado")
let total = document.getElementById("total")
let acumulado = 0
let sumatotal = 0

boton.addEventListener('click', function () {

    if (sumatotal < 100) {
        if (Number.isNaN(num.value) || num.value == "" ) { return }
        console.log(num.value)
        sumatotal += Number(num.value)
        acumulado++
        num.value = ""
        total.innerHTML = `${sumatotal}`
        console.log(acumulado)
    }

    if (sumatotal >= 100) {
        resultado.innerHTML = `Valor total: ${sumatotal}. Cantidad de números introducidos: ${acumulado}`
    }

});