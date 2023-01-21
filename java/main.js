//Calculadora de impuestos//
var registros = []
var opcion = [0];
do {
    opcion=Number(prompt("Bienvenido a IMPUESTIN ¿Que moneda quiere calcular hoy? 1. Dolar 2. Euro 3. Real 0. salir"))
switch (opcion){


    //calcular precio en dolares//
    case 1: 
    let preciodolar = Number(prompt("¿Cual es el precio en dolares?"))
    while (preciodolar == "") {

        alert("por favor, ingresa un precio en dolares")
    
        preciodolar = Number(prompt("¿Cual es el precio en dolares?"))
    
    }
    
    function mostrar(mensaje) {
    
        console.log(mensaje)
    
    }
    
    let resultadodolar = preciodolar * 325.74
    
    mostrar(resultadodolar);
    
    alert(`El total es de $ ${resultadodolar}`)
break;


//calcular precio en euros//
case 2: 
    let precioeuro = Number(prompt("¿Cual es el precio en euros?"))
    while (precioeuro == "") {

        alert("por favor, ingresa un precio en euros")
    
        precioeuro = Number(prompt("¿Cual es el precio en euros?"))
    
    }
    
    function mostrar(mensaje) {
    
        console.log(mensaje)
    
    }
    
    let resultadoeuro = precioeuro * 337.13
    
    mostrar(resultadoeuro);
    
    alert(`El total es de $ ${resultadoeuro}`)
    break;

//calcular precio en reales//
    case 3: 
    let precioreal = Number(prompt("¿Cual es el precio en reales?"))
    while (precioreal == "") {

        alert("por favor, ingresa un precio en euros")
    
        precioreal = Number(prompt("¿Cual es el precio en reales?"))
    
    }
    
    function mostrar(mensaje) {
    
        console.log(mensaje)
    
    }
    
    let resultadoreal = precioreal * 20.93
    
    mostrar(resultadoreal);
    
    alert(`El total es de $ ${resultadoreal}`)
    break;
}
}
while(opcion!=0)

//Termina calculadora de impuesto en USD//


//lista sobre nuevas monedas para agregar//
const listaMonendas = [];
let cantidad = 1;
do {
    let entrada = prompt("¿Que moneda te gustaria que agreguemos?, en caso de que tu respuesta sea nula, por favor apretar cancelar");
    listaMonendas.push(entrada.toUpperCase());
    console.log(listaMonendas.length);
} while (listaMonendas.length != cantidad)
const nuevaLista = listaMonendas.concat(["¡Se agregara proximamente!"]);
alert(nuevaLista.join("\n"));
console.log(nuevaLista)
//termina lista//



//diferentes monedas con sus valores en consola//
function Monedas(nombre, valor, subio) {
    this.nombre = nombre;
    this.valor = valor;
    this.cambio = subio;
};
var moneda1 = new Monedas("Dolar", "Su valor es de $370", false)
var moneda2 = new Monedas("Euro", "su valor es de $198", true)
var moneda3 = new Monedas("Real", "su valor es de $35", true)

var monedas = [moneda1, moneda2, moneda3]
console.log(monedas)