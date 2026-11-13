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

// let intento = 0;
// let paso = false;

// while(!paso && intento < 5){
//     intento ++;

//     if(intento === 3){
//         paso = true;
//         console.log(`Intento ${intento}: pasó`);
//     } else {
//         console.log(`Intento ${intento}: Falló`);
//     }
// }

// if (paso){
//     if(intento === 1){
//         console.log('El test pasó al primer intento');
//     } else {
//         console.log(`El test pasó después de ${intento} intentos`);
//     }
// } else {
//     console.log('El test falló después de 5 intentos');
// }

// Ejercicio 3

// function evaluarStatus(codigo){
//     if(codigo === 200){
//         return "OK";
//     } else if (codigo === 401){
//         return "No autorizado: revisar token";
//     } else if (codigo === 404){
//         return "No encontrado";
//     } else if(codigo >= 500){
//         return "Error del servidor";
//     } else {
//         return "Revisar manualmente";
//     }
// }

// // console.log(evaluarStatus(200));
// // console.log(evaluarStatus(401));
// // console.log(evaluarStatus(404));
// // console.log(evaluarStatus(503));
// // console.log(evaluarStatus(500));
// // console.log(evaluarStatus(100));


// function verificar(codigo, esperado){
//     let status = evaluarStatus(codigo);
//     if (status === esperado){
//         console.log(`PASS: ${codigo}`);
//     } else {
//         console.log(`FAIL: ${codigo} -> esperado: ${esperado}, obtenido: ${status}`);
//     }
// }

// verificar(200, "OK");
// verificar(404, "No encontrado");
// verificar(503, "Error del servidor");
// verificar(301, "OK");


// Ejercicio 4
function tasaDeExito(aprobados, total){
    if(total === 0){
        return "No se ejecutaron tests";
    }  else if (aprobados < 0 || total < 0){
        return `Datos inválidos. Aprobados: ${aprobados}, total: ${total}`;
    } else if (aprobados > total){
        return `El número de aprobados (${aprobados}) no puede ser mayor que el total (${total})`;
    }
    const result = Math.round((aprobados / total) * 100);
    return `Tasa de éxito: ${result}%`;
}

console.log(tasaDeExito(17, 20));
console.log(tasaDeExito(0, 5));
console.log(tasaDeExito(3, 0));
console.log(tasaDeExito(25, 20));
console.log(tasaDeExito(-1, 20));
console.log(tasaDeExito(0, -4));