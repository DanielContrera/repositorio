         let ladoA=10;
let ladoB=10;
let ladoC=5;
let expectedArea = 75


let rectangleArea=(ladoB*ladoC);
let triangleArea=(ladoB*(ladoA-ladoC)/2);

let terrenoA=(rectangleArea + triangleArea)
console.log(terrenoA==expectedArea)
console.log('El area de el terreno Forma A es de', terrenoA)

                