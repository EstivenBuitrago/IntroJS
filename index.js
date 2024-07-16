const btn = document.querySelector("button")

function random(numero){
    return Math.floor(Math.random()*(numero +1))
}

btn.addEventListener("click", ()=>{
    //const rdnColor = `rgb(${random(255)},${random(255)},${random(255)})`
    const rojoColor = random(255)
    const verdeColor = random(100)
    const azulColor = random(255)
    //console.log(rdnColor)
    document.body.style.backgroundColor = `rgb(${rojoColor},${verdeColor},${azulColor})`
})







// console.log("Hola Mundo")

// Numero = 3
// typeof(Numero)
// console.log("el tipo de dato es:",typeof(Numero));

// cadenaDeTexto = "hola mundo"
// console.log("El tipo de dato es:", typeof(cadenaDeTexto)),

// booleano = false
// console.log("El tipo de dato es:", typeof(booleano));

// variable = true

// if (typeof(variable) == "number") {
//    resultado = variablel*8
// }
// else if (typeof(variable) == "string"){
//     resultado = "estoy concatenando" + variable
// }else{
//     resultado = "no es string ni number"
// }
// console.log(resultado)



