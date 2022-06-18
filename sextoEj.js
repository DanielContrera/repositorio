let sueldo = parseInt(prompt('Ingrese sueldo: ', 1))
let antiguedad = parseInt(prompt('Ingrese anos de antiguedad: ', 1))

if (sueldo < 500 && antiguedad >= 10) {
    console.log(sueldo * 1.20)
} else if (sueldo < 500 && antiguedad < 10) {
    console.log(sueldo * 1.05)
} else if (sueldo >= 500) {
    console.log(sueldo)
}