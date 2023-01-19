let precio = Number(prompt("¿Cual es el precio en dolares?"))



while (precio == "") {

    alert("por favor, ingresa un precio en dolares")

    precio = Number(prompt("¿Cual es el precio en dolares?"))

}

function mostrar(mensaje) {

    console.log(mensaje)

}

let resultado = precio * 325.74

mostrar(resultado);

alert(`El total es de $ ${resultado}`)