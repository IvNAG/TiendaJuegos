let cuentas = []

cuentas[1] = 100

cuentas[2] = 150

cuentas[3] = 300

for (let i = 1; i < (cuentas.length); i++) {
    console.log(`El saldo en sus cuenta ${i} es de ${cuentas[i]}`)
}

const usarCuenta = prompt('¿Que cuenta desea utilizar? cuenta 1, cuenta 2, cuenta 3')

console.log(parseInt(usarCuenta))

const monto = parseInt(prompt('Cuanto va a pagar?'))

if (cuentas[usarCuenta] > monto) {
    console.log('pagado')
} else {
    console.log('dinero insuficiente')
}

function solicitarNombre() {
    let nombreIngresado = prompt("Ingrese su nombre")
    alert("El nombre ingresado es " + nombreIngresado)
}

solicitarNombre()