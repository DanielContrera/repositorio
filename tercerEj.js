let primerNum = parseInt(prompt ('Insertar primer numero:', 1))
let segundoNum = parseInt(prompt ('Insertar segundo numero:', 2))
let tercerNum = parseInt(prompt ('Insertar tercer numero:', 3))

if(primerNum === segundoNum && segundoNum === tercerNum) {
    console.log ('Los numeros son iguales')
    console.log ([primerNum + segundoNum] * tercerNum)
} else {
    console.log ('Los numeros no son iguales :(')

}