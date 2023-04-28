
//Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']
    
     const array1 = ['rojo', 'azul', 'amarillo'];
     const array2 = ['blanco', 'negro', 'rojo'];

     console.log(array1.concat(array2));

    function colorRepetido(array1, array2) {
        let Resultado = [];
        for (let i = 0; i < array1.length; i++) {
            let color_a1 = array1[i];
            for (let k = 0; k < array2.length; k++) {
                let color_a2 = array2[k];
                if ((color_a1===color_a2)&&(Resultado.indexOf(color_a1)=== -1)){
                    Resultado.push(color_a2);
                }
            }
        }
        console.log(Resultado);
    }
     colorRepetido(array1, array2)

     //Ejemplo 2:
     //Array1: [4, 3, true, 'manzana']
     //Array2: ['pera', 3, f alse, true, 3, true]
     //Resultado: [3, true]

     const array3 = ['4', '3', 'true', 'manzana'];
     const array4 = ['pera', '3', 'false', 'true','3','true'];

     console.log(array3.concat(array4));

     function cosaRepetida(array3, array4) {
        let Resultado = [];
        for (let i = 0; i < array3.length; i++) {
            let cosa_a3 = array3[i];
            for (let k = 0; k < array4.length; k++) {
                let cosa_a4= array4[k];
                if ((cosa_a3===cosa_a4)&&(Resultado.indexOf(cosa_a3)=== -1)){
                    Resultado.push(cosa_a4);
                }
            }
        }
        console.log(Resultado);
    }
     colorRepetido(array3, array4)



