// Ejercicio 1
// const metodo = "POST";
// switch(metodo){
//     case "GET":
//         console.log('Leer un recurso');
//         break;
//     case "POST":
//         console.log('Crear un recurso');
//         break;
//     case "PUT":
//     case "PATCH":
//         console.log('Actualizar un recurso');
//         break;
//     case "DELETE": 
//         console.log('Borrar un recurso');
//         break;
//     default: 
//         console.log('Método no soportado');
//         break;
// }

//Ejercicio 2

let intento = 0;
let paso = false;

while(!paso && intento < 5){
    intento ++;

    if(intento === 3){
        paso = true;
        console.log(`Intento ${intento}: pasó`);
    } else {
        console.log(`Intento ${intento}: Falló`);
    }
}

if (paso){
    if(intento === 1){
        console.log('El test pasó al primer intento');
    } else {
        console.log(`El test pasó después de ${intento} intentos`);
    }
} else {
    console.log('El test falló después de 5 intentos');
}

