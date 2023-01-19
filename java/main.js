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


function Monedas (nombre, valor, subio){
 this.nombre = nombre;
 this.valor = valor;
 this.cambio = subio;
};
var moneda1 = new Monedas("Dolar", "Su valor es de $370",false)
var moneda2 = new Monedas("Euro","su valor es de $198",true)
var moneda3 = new Monedas("Real","su valor es de $35",true)

var monedas = [moneda1, moneda2, moneda3]
console.log(monedas)