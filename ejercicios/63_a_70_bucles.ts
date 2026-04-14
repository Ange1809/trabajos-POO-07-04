console.log("\n--- Ejercicios 63 a 70: Bucles ---");

// Ejercicio 63 y 74/75: Pedir contraseña hasta acertar (Simulamos intentos con un Array)
function pedirContrasena(intentos: number[]) {
    let i = 0;
    while (i < intentos.length) {
        if (intentos[i] === 1111) {
            console.log("Ej 63: ¡Contraseña correcta!");
            break; // Rompe el bucle si acierta
        } else {
            console.log(`Ej 63: Intento ${intentos[i]} incorrecto. Intente de nuevo.`);
        }
        i++;
    }
}

// Ejercicio 64: Calculador de cuadrados hasta que sea cero
function calcularCuadrados(numeros: number[]) {
    let i = 0;
    while (numeros[i] !== 0 && i < numeros.length) {
        console.log(`Ej 64: El cuadrado de ${numeros[i]} es ${numeros[i] * numeros[i]}`);
        i++;
    }
    console.log("Ej 64: Se ingresó un 0. Fin del programa.");
}

// Ejercicio 67 y 68: Contadores While
function contarWhile() {
    console.log("Ej 67: Números del 1 al 10:");
    let a = 1;
    while (a <= 10) {
        process.stdout.write(a + " "); // Escribe en la misma línea
        a++;
    }
    
    console.log("\nEj 68: Pares del 26 al 10 descendiendo:");
    let b = 26;
    while (b >= 10) {
        process.stdout.write(b + " ");
        b -= 2; // Resta 2 en cada paso
    }
    console.log(); // Salto de línea al final
}

// Ejercicio 69: Cuántas cifras tiene un número
function contarCifras(num: number) {
    let cifras = 0;
    let temp = num;
    while (temp >= 1) {
        temp = temp / 10;
        cifras++;
    }
    console.log(`Ej 69: El número ${num} tiene ${cifras} cifras.`);
}

// Ejercicio 70: Adivinar número en 3 intentos
function adivinarNumero(intentos: number[]) {
    const secreto = 7;
    let acierto = false;
    
    for (let i = 0; i < 3 && i < intentos.length; i++) {
        if (intentos[i] === secreto) {
            console.log("Ej 70: ¡Adivinaste!");
            acierto = true;
            break;
        }
    }
    if (!acierto) console.log(`Ej 70: Agotaste tus 3 intentos. El número era ${secreto}.`);
}

// Pruebas
pedirContrasena([1234, 5678, 1111]);
calcularCuadrados([4, 7, 2, 0, 9]); // El 9 ya no se lee por el 0
contarWhile();
contarCifras(45892);
adivinarNumero([5, 9, 7]); // Acierta en el tercer intento

export {};