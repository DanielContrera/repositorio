let dia = prompt("Insertar dia:", "1")
let mes = prompt("Insertar mes:", "12")
let ano = prompt("Insertar ano:", "2022")

console.log(dia,mes,ano);

if (mes == "12" && dia == "24") {
    console.log("Feliz Navidad!", dia, mes, ano)
} else {
    console.log("Otro dia que no es Navidad :(", dia, mes, ano)
}
