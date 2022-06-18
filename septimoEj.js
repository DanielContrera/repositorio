let nota1 = parseInt(prompt('Ingrese primer nota: ', 1))
let nota2 = parseInt(prompt('Ingrese segunda nota: ', 1))
let nota3 = parseInt(prompt('Ingrese tercer nota: ', 1))

if ((nota1 + nota2 + nota3) / 3 >= 7) {
    console.log('Promocionado!')
} else {
    console.log('Reprobado :(')
}