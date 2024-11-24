// Paso 1: Declaración de Variables
let num1 = 10;
let num2 = 5;
let operacion;

// Paso 2: Función para realizar operaciones y validaciones
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: No se puede dividir por cero.";
    }
    return num1 / num2;
  } else {
    return "Error: Operación no válida.";
  }
}


// Paso 4: Bucle para realizar múltiples operaciones
let continuar = true; // Variable para controlar el bucle

while (continuar) {
  num1 = parseFloat(prompt("Ingrese el primer número:"));
  num2 = parseFloat(prompt("Ingrese el segundo número:"));
  operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division o salir):").toLowerCase();

  if (operacion === "salir") {
    alert("Gracias por usar la calculadora. ¡Hasta luego!");
    continuar = false;
  } else {
    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`);
  }
}
