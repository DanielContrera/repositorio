let valorX = prompt('Ingrese valor de x:', 1)
let valorY = prompt('Ingrese valor de y:', 1)

Math.round (valorX, valorY)

if (valorX > 0 && valorY > 0) {
    console.log('El punto se encuentra en el primer cuadrante.')
} else if  (valorX < 0 && valorY > 0) {
    console.log('El punto se encuentra en el segundo cuadrante.')
} else if  (valorX < 0 && valorY < 0) {
    console.log('El punto se encuentra en el tercer cuadrante.')
} else if  (valorX > 0 && valorY < 0) {
    console.log('El punto se encuentra en el cuarto cuadrante.')
}