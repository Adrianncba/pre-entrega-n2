

// Bienvenidos al planeador simple de gastos 
let ingresoMensual = 0;
let sumadorGastos= 0;
let listadoDeGastos = [ ];

//Array de gastos 

// constructor de gastos 
class AgregarGastos{
    constructor(nombre, precio, cuotas){
        this.nombre = prompt("Indique el nombre de su compra"),
        this.precio = parseInt(prompt("¿Cuanto costo su producto?")),
        this.cuotas =parseInt(prompt("¿En cuantas cuotas lo compraste?"));
}

dividirCuotas(numero) {
        return this.precio/this.cuotas; 
  }
       
}


// Agregar Gastos  
function agregarGasto(){
    let nuevoGasto = new AgregarGastos();
    listadoDeGastos.push(nuevoGasto);
}

//Funcion que determina cuanto tenes que pagar por mes segun el ingreso mensual.
function sumaTotalCuotas() {
    let totalCuotas = listadoDeGastos.reduce((sumaTotal, gasto) => {return sumaTotal + gasto.dividirCuotas();}, 0); 
    console.log("Lo que vas a tener que pagar este mes es: "+ totalCuotas);
    
    return totalCuotas;
}
//Funcion para eliminar los gastos
function eliminarGasto() {
    let nombreGasto = prompt("Ingrese el nombre del gasto que desea eliminar\n\n (En consola aparecera un listado de tus gastos)");

    // Buscar el índice del gasto en el array
    let index = listadoDeGastos.findIndex(gasto => gasto.nombre === nombreGasto);

    if (index !== -1) {
        listadoDeGastos.splice(index, 1);
        alert(`El gasto "${nombreGasto}" ha sido eliminado exitosamente.`);
    } else {
        alert("No se encontró un gasto con ese nombre.");
    }
}

//PROGRAMA
function calculadorDeGastos() {
    let sumadorGastos = 0;
    alert("¡Bienvenidos al planeador de gastos mediante alertas!\nA continuacion vamos a pedirte tu ingreso mensual para poder empezar");
    ingresoMensual = parseInt(prompt("Por favor ingrese su ingreso mensual"));

    

    if (ingresoMensual > 0 ){

        let opciones = prompt("Su ingreso mensual es de: $"+ingresoMensual+"\n A continuacion ingrese una opcion.\n\na - Modificar ingreso mensual.\nb - Ingresar gasto mensual.\nc - Ver detalles de gastos.\nd - Ver gasto mensual total\ne - Eliminar gastos\n\n Escriba salir para detener el programa ");       

    while(["a","b","c","d","e"].includes(opciones)) {  
             
        switch(opciones){
        case "a": 
            ingresoMensual = parseInt(prompt("Ingrese su nuevo valor de ingreso mensual" ))
            alert("¡Su ingreso mensual ha sido cambiado con exito!")
            console.log("El valor de ingreso mensual ha cambiado a "+ingresoMensual);
            break;
        case "b": 

              console.log("===========================================");
              console.log("VAMOS A AÑADIR UN PRODUCTO NUEVO A TU LISTA");
              console.log("===========================================");

             agregarGasto();
             console.log("Se añadido un nuevo producto")
             alert("¡Su gasto ha sido añadido con exito!");
            break;
        case "c": 
            console.log("===========================================");
            console.log("Este es el listado de tus compras actuales");
            console.log("===========================================");
            listadoDeGastos.forEach(gasto => {
            console.log(`Nombre: ${gasto.nombre}\nPrecio: ${gasto.precio}\nCuotas: ${gasto.cuotas}`);
            });
            console.log("===========================================");
            
                          
            alert("¡Acabamos de imprimir tu detalle de gastos por consola!")
            break; 
        case "d":
            console.log("Este es tu ingreso mensual $"+ingresoMensual);
            console.log("===========================================");
            sumaTotalCuotas();
            console.log("===========================================");

        
            break;
        case "e":
            console.log("===========================================");
            console.log("Vas a eliminar un gasto.");
            console.log("===========================================");
            console.log("Estos son tus gastos actuales");

            listadoDeGastos.forEach(gasto => {
                console.log(`Nombre: ${gasto.nombre}\nPrecio: ${gasto.precio}\nCuotas: ${gasto.cuotas}`);
                });
            eliminarGasto();  // Llamamos a la función para eliminar el gasto
            break;
           
             break;
        case "salir":
           alert("Gracias por utilizar este programa");
        break;

        default:
        alert("Ingresaste una opcion incorrecta")
        break;
    }

    opciones = prompt("Su ingreso mensual es de: $"+ingresoMensual+"\n A continuacion ingrese una opcion.\n\na - Modificar ingreso mensual.\nb - Ingresar gasto mensual.\nc - Ver detalles de gastos.\nd - Ver gasto mensual total\ne - Eliminar gastos\n\n Escriba salir para detener el programa ");       


    

    

}   
    

}
else{
    alert("Debes ingresar un valor de ingreso mensual correcto");
}
}
