/* PORTAL ONLINE PARA VENTA DE ENTRADAS "MisEntradas.com"

Mi simulador consiste en un portal para la compra de entradas a espectáculos de diversas categorías: recitales, teatro, expo & congresos, deportivos, entre otros.
Por el momento, a efectos de la segunda entrega del proyecto final, el usuario podrá elegir:
- la actividad a la que desea asistir, 
- cuantas entradas,
- pagar con factura (inc. IVA) o sin factura (sin IVA).

Pasos para crear el portal:

- cada espectaculo crearlo como objeto
- ordenar los objetos en un array
- presentar al cliente las opciones de espectáculos
- crear las funciones para realizar la selección: validar datos, sumar esa selección al carrito y finalizar compra 
- integrar todas las funciones y los elementos que la componen para hacerlo operativo 
*/

//Class constructor para instanciar los espectáculos (llamados eventos) como objetos
class Evento {
  constructor(id, nombre, categoria, lugar, precio, fecha, entradasDisponibles){
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.lugar = lugar;
    this.precio = precio;
    this.fecha = fecha;
    this.entradasDisponibles = entradasDisponibles;
  }

//Por cada entrada que se adquiere, se va restando esa cantidad de su respectivo stock
  restaEntradasDisponibles(){
    this.entradasDisponibles = this.entradasDisponibles - 1;
  }
}


//Creación de espectáculos disponibles como objetos a partir del class constructor anterior
const evento1 = new Evento(1, "'Casados con hijos'", "Teatro", "Teatro Gran Rex", 10000, "Lunes 25 de julio de 2023", 500);
const evento2 = new Evento(2, "'Frozen on Ice'", "Show infantil", "Luna Park", 8000, "Lunes 15 de junio de 2023", 1000);
const evento3 = new Evento(3, "'Solomun'", "Concierto", "Mandarine Park", 7000, "Sabado 8 de diciembre 2023", 5000);
const evento4 = new Evento(4, "'La Delio Valdez'", "Concierto", "Teatro Metropolitan", 9000, "Jueves 30 de julio de 2023", 800);
const evento5 = new Evento(5, "'El último llamado'", "Teatro", "Teatro Gran Rex", 5000, "Viernes 15 de agosto de 2023", 1000);

//Array de espectáculos
const listaEventos = [evento1, evento2, evento3, evento4, evento5];



//Inicio de interacción con usuario:
let nombreCliente = prompt("¡Bienvenid@ a 'MisEntradas.com'! Por favor, ingrese su nombre:");
let itemsCompra = "";
let precioCompra = 0;


//El usuario elige el evento al que desea comprar entradas:
function seleccionarEvento() {
  let consultaInicial = `${nombreCliente}, ingrese el número del evento al que desea asistir: \n\n`;
  listaEventos.forEach(e => {
      consultaInicial += `${e.id} - ${e.nombre} en ${e.lugar} | Día: ${e.fecha} \n` 
  })
  consultaInicial += "0 - Finalizar"//Aqui termina el armado del 2° mensaje al usuario, con opciones de evento
  let respuestaUser = parseInt(prompt(consultaInicial));
  return respuestaUser;
}

//llamo a la función declarada arriba y guardo la elección del espectáculo en una variable para usarla en las siguientes funciones:
let seleccionDeCliente = seleccionarEvento();

//función para sumar al carrito la opción elegida y su valor en la función anterior:
function sumarAlCarrito(nombre, precio) {
    alert(`Sumamos una entrada para ${nombre} a tu carrito por un valor de $${precio}`);
    itemsCompra += `${nombre} x1 \n`;
    precioCompra += precio;
}

//Funcion con ciclo while para hacer match entre la elección del usuario en la función "seleccionDeCliente" y agregarlo al carrito de compras en la función declarada arriba. Tambien damos la posibilidad de elegir más de un espectáculo:
while (seleccionDeCliente != 0) {
  //Switch para cotejar la respuesta del usuario con nuestro catálogo y sumar lo elegido al carrito:
  switch (seleccionDeCliente) {
    case 1:
      sumarAlCarrito(evento1.nombre, evento1.precio)
      break;
    case 2:
      sumarAlCarrito(evento2.nombre, evento2.precio)
      break;
    case 3:
      sumarAlCarrito(evento3.nombre, evento3.precio)
      break;
    case 4:
      sumarAlCarrito(evento4.nombre, evento4.precio)
      break;
    case 5:
      sumarAlCarrito(evento5.nombre, evento5.precio)
      break;
    default:
      alert("Ingresaste un valor no válido, por favor reintentalo")
  }
  seleccionDeCliente = seleccionarEvento();//Volvemos a mostrar el mensaje con todas las opciones por si el usuario quiere volver a comprar otra entrada
}

//Luego de terminar el ciclo While, terminamos la compra llamando a la función que asignamos más abajo y guardamos su resultado en una variable.
let cerrarCompra = finalizaCompra() 

//Funcion para retornar monto con IVA aplicado
function iva(monto) {
  return monto * 1.21;
}

//Funcion para cerrar la compra, donde analizamos si el usuario llevó algún producto y, si llevó, si va a querer el monto facturado o no.
function finalizaCompra() {
    if (precioCompra !== 0) {
      let factura = prompt(`${nombreCliente}, el total de su compra es de $${precioCompra}, ¿va a querer factura?`).toLowerCase()
      if ((factura == "si") || (factura == "sí")) { 
        alert(`Perfecto, va a llevar la/s siguiente/s entrada/s:\n${itemsCompra}\n por un total de: $${iva(precioCompra)}`)
        alert("¡Agradecemos mucho tu paso por nuestro sitio 'misEntradas.com'!")
      } else {
        alert(`Sin factura, el costo total sería de $${precioCompra}`)
        alert("¡Agradecemos mucho tu paso por nuestro sitio 'misEntradas.com'!")
      }
    } else {
        alert("¡Agradecemos mucho tu paso por nuestro sitio 'misEntradas.com'!")
    }
}