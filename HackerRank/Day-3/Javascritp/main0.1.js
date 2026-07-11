// Importamos el módulo 'readline' nativo de Node.js. 
// Esto nos permite leer y escribir datos a través de la consola.
const readline = require('readline').createInterface({
    input: process.stdin,  // Define por dónde entra la información (teclado/consola)
    output: process.stdout // Define por dónde sale la información (pantalla/consola)
});

// Iniciamos la lectura. Se queda esperando a que el usuario ingrese algo y presione Enter.
// Lo que el usuario escribe se guarda en la variable 'input'.
readline.question('', (input) => {
    
    // input.trim() elimina cualquier espacio en blanco al inicio o al final.
    // parseInt(..., 10) convierte ese texto en un número entero de base 10.
    // El resultado se guarda en la constante N.
    const N = parseInt(input.trim(), 10);
    
    // Primera condición: Comprobamos si N es un número IMPAR.
    // Si el residuo de dividir N entre 2 es distinto de 0, es impar.
    if (N % 2 !== 0) {
        console.log("Weird"); // Si es impar, la regla dice que es "Weird"
    } else {
        // Si llegamos aquí (else), significa que el número obligatoriamente es PAR.
        // Ahora evaluamos en qué rango de números se encuentra:
        
        // ¿Es par y está entre el 2 y el 5 (ambos inclusive)?
        if (N >= 2 && N <= 5) {
            console.log("Not Weird");
            
        // ¿Es par y está entre el 6 y el 20 (ambos inclusive)?
        } else if (N >= 6 && N <= 20) {
            console.log("Weird");
            
        // ¿Es par y es estrictamente mayor que 20?
        } else if (N > 20) {
            console.log("Not Weird");
        }
    }
    
    // Una vez que terminamos de evaluar y mostrar el resultado, 
    // cerramos la interfaz de readline para que el programa pueda finalizar.
    readline.close();
});