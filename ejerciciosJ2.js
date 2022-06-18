function ej2() {
let multiplos = []
for (let i = 1; i*8 < 500; i++){
    multiplos.push(i*8);
}
return(multiplos)
}

function ej3(){
    const notas = [6, 9, 8, 11, 5, 4, 12, 10, 3, 9]
    let notasMayores = 0
    
    for (let i = 0; i < notas.length; i++){
        if (notas[i]>= 7){
            notasMayores++
        }

    }
    let notasMenores = notas.length - notasMayores
    let printNotas = {
        mayora7: notasMayores,
        menora7: notasMenores
    }
    return(printNotas)
}

function ej4(){
    let alturas = parseInt(prompt('Ingrese altura:', 1, 'cm'))
    let promedioAlturas = 0
    // const alturas = [165, 175, 168, 189, 174]
    for (let i = 0; i < alturas.length; i++){
     promedioAlturas += alturas[i] / alturas.length    
    }
    return promedioAlturas
}

console.log(ej4())
