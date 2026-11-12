// const statusCode = 302;
// const endpoint = "/api/tickets";

// console.log(`El endpoint ${endpoint} respondió ${statusCode}`);

// if(statusCode == 200){
//     console.log("OK");
// } else if (statusCode == 401){
//     console.log("No autorizado: revisar token");
// } else if (statusCode == 404) {
//     console.log("No encontrado");
// } else if (statusCode >= 500){
//     console.log("Error del servidor");
// } else {
//     console.log("Revisar manualmente");
// }

// let bugsAbiertos = 12;
// bugsAbiertos -= 5;
// bugsAbiertos += 2;
// console.log(bugsAbiertos, typeof bugsAbiertos);
// console.log(bugsAbiertos == "9");
// console.log(bugsAbiertos === "9");


// let nombre = prompt('¿Cual es el nombre oficial de "JavaScript"?', '');
// if (nombre == "ECMAScript") {
//     alert('Correcto!');
// } else {
//     alert("¿No lo sabes? ¡ECMAScript!");
// }


// let numero = prompt('Ingresa un numero: ', '');
// if(numero > 0){
//     alert('1');
// } else if (numero < 0) {
//     alert('-1');
// } else {
//     alert("0");
//}


let result = (a + b < 4) ? 'Debajo' : 'Encima';

let message = (login == 'Empleado') ? 'Hola' : 
              (login == 'Director') ? 'Felicidades' : 
              (login == '') ? 'Sin sesión' : '';