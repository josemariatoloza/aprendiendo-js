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

let bugsAbiertos = 12;
bugsAbiertos -= 5;
bugsAbiertos += 2;
console.log(bugsAbiertos, typeof bugsAbiertos);
console.log(bugsAbiertos == "9");
console.log(bugsAbiertos === "9");