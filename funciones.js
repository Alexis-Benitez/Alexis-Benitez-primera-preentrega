function compararNumeros(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "mayor":
            return primerNumero > segundoNumero ? "El primer número es mayor" : "El primer número no es mayor";
            break;
        case "menor":
            return primerNumero < segundoNumero ? "El primer número es menor" : "El primer número no es menor";
            break;
        case "igual":
            return primerNumero === segundoNumero ? "Ambos números son iguales" : "Los números no son iguales";
            break;
        default:
            return "Operación no válida";
            break;
    }
}

let numero = parseInt(prompt("Ingrese un número"));
let ope = prompt("Ingrese una operación: mayor, menor o igual");
let numero2 = parseInt(prompt("Ingrese otro número"));

alert("Resultado de la comparación: " + compararNumeros(numero, numero2, ope));