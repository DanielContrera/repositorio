let firstNum = parseInt(prompt ('Inserte un numero:', 1))
let secondNum = parseInt(prompt ('Inserte un numero:', 2))
let thirdNum = parseInt(prompt ('Inserte un numero:', 3))

if (firstNum < 10 && secondNum < 10 && thirdNum < 10) {
    console.log ('Todos los numeros son menores a diez.')
} else {
    console.log ('Algun numero no es menor a 10')
}