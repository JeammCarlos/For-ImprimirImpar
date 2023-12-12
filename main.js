// Imprimir en consola los números impares del 1 al 50.
// Usando una estructura de control FOR que recorra los números del 1 al 50 y compruebe si son impares usando el operador módulo (%).

// Inicializa una variable i con el valor 1
// Repite el bloque de código mientras i sea menor o igual que 50
// Incrementa el valor de i en 1 después de cada iteración
for (let i = 1; i <= 50; i++) {
    // Si el módulo de i con 2 es distinto de cero, significa que i es impar
    if (i % 2 !== 0) {
      // Imprime el valor de i en la consola
      console.log(`Los Números Impares del 1-50 son: ${i}`);
    }
  }
  