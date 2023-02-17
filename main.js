class Estadia {
    constructor(region, tarifa, habitaciones) {
        this.region = region
        this.tarifa = tarifa
        this.habitaciones = habitaciones
    }
}

let tarifas = [
    {region: "Cuyo", tarifa: "40000"},
    {region: "Pampeana", tarifa: "35000"},
    {region: "Litoral", tarifa: "35000"},
    {region: "Patagonia", tarifa: "60000"},
    {region: "Noroeste", tarifa: "30000"},

];

function seleccionarRegion(){
    let region = prompt("ingrese region donde desea hospedarse")
    let tarifa = parseInt(prompt("ingrese tarifa"))
    let habitaciones = prompt("seleccione cuantas habitaciones?")
   
   const nuevaEstadia  = new Estadia(region, tarifa, habitaciones)
    arrayCarrito.push(nuevaEstadia)
    alert("seleccion añadida a carrito")
   
}

function verCarrito(){
    arrayCarrito.forEach((Estadia)=>{
    alert(` usted selecciono su estadia ${Estadia.region} por una tarifa de ${Estadia.tarifa}de habitaciones ${Estadia.habitaciones}`)
    });
   
}
   
function mostrarOferta(){
   const Ofertas= tarifas.filter((estadia) => estadia.tarifa < 30000)
   for (const Oferta of Ofertas) {
   alert(`la oferta de de hoy es : estadia ${Oferta.region} a un valor de ${Oferta.tarifa}`)
   }
}   
function finalizarReserva() {
   const total = arrayCarrito.reduce((acc, el) => acc + el.tarifa, 0)
   alert(`su reserva quedo confirmada el total a pagar es de ${total}`)
}   
   
   let arrayCarrito = []
   
   
   let opcion = prompt("seleccione: \n 1: Seleccione estadia \n 2: su tarifa de oferta es \n 3: ver carrito \n 4: finalizar reserva \n 5: salir")
   while (opcion !== "5") {
    if (opcion === "1") {
        seleccionarRegion(arrayCarrito)
    }
    if (opcion === "2") {
        mostrarOferta()
    }
    if (opcion === "3") {
        verCarrito()
    }
    if (opcion === "4") {
        finalizarReserva()
    }
    opcion = prompt("volver a su seleccion: \n 1: Seleccione estadia \n 2: su tarifa oferta es \n 3: ver carrito \n 4: finalizar reserva \n 5: salir")
}   
   
   alert("Tu reserva quedo confirmada, que disfrutes de tu estadia!")