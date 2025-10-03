let boton = document.getElementById("boton")
let num = document.getElementById("num");
let tablas = document.getElementById("contenedortablas");


boton.addEventListener('click', function () {
    if (Number.isNaN(num.value) || num.value < 1 || num.value > 10) { return }
    let numerototaltablas = Number(num.value)
    tablas.innerHTML = ""

    for (let i = numerototaltablas; i > 0; i--) {
        let tabla = document.createElement("section")
        tabla.className = "tabla"
        for (let j = 0; j <= 10; j++) {
            let p = document.createElement("p")
            let multiplicacion = i * j
            p.className = "multiplicacion"
            p.textContent = `${i} x ${j} = ${multiplicacion}`;
            console.log(`${i} x ${j} = ${multiplicacion}`)
            tabla.appendChild(p)
        }
        tablas.appendChild(tabla);
    }
});