//3.1) Dado el siguiente objeto
//let carrito = {
    //montoTotal: 10,
   // productos: ["Leche"]
//}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//agregarProducto(nombre, precio, unidades) {
    // Completar aca...
//}


//Ej:
//agregarProducto("Azucar", 5, 2);

//Resultado esperado
//carrito = {
    //montoTotal: 20,
    //productos: ["Leche", "Azucar"]
//}
//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe el producto xxx”

 class generar_carrito{
    montoTotal=0;
    productos=[];
 constructor(montoTotal,productos){
    this.montoTotal = montoTotal;
    this.productos.push(productos)
 }
  agregarProducto(nombre,precio){
    if (carrito.productos.indexOf(nombre)>=0){
         console.log("ya existe el producto"+nombre+"en el carrito");

    }else {
        montoAcumulado=montoAcumulado + precio;
        console.log("producto agregado al carrito: "+nombre+" - precio $ "+precio+" -monto acumulado: $ "+montoAcumulado+"")
        this.montoTotal=montoAcumulado;
        this.productos.push(nombre)
    }
  }
 }
 let carrito = new generar_carrito(10, "leche");
 let montoAcumulado = carrito.montoTotal;

 console.log("el monto Total inicial es de: $ "+carrito.montoTotal+" con el producto: "+carrito.productos+"");
 carrito.agregarProducto("azucar",1000);


 console.log("el monto Total es de: "+carrito.montoTotal+"")
 console.log("los productos son: "+carrito.productos+"");
