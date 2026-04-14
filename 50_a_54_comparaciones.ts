console.log("\n--- Ejercicios 50 a 54: Comparaciones ---");

// Ejercicio 50 y 52: Iguales o mayor
function igualOMayor(a: number, b: number) {
    if (a === b) {
        console.log(`Ej 50/52: ${a} y ${b} son iguales.`);
    } else if (a > b) {
        console.log(`Ej 50/52: El mayor es ${a}.`);
    } else {
        console.log(`Ej 50/52: El mayor es ${b}.`);
    }
}

// Ejercicio 51: Variable lado derecho (Ejemplo: 10 === num en vez de num === 10)
function variableLadoDerecho(num: number) {
    if (10 === num) {
        console.log("Ej 51: El número es exactamente 10");
    } else {
        console.log("Ej 51: El número no es 10");
    }
}

// Ejercicio 53: Positivos
function verificarPositivos(a: number, b: number) {
    if (a > 0 && b > 0) console.log("Ej 53: Los dos son positivos.");
    else if (a > 0 || b > 0) console.log("Ej 53: Uno de ellos es positivo.");
    else console.log("Ej 53: Ninguno es positivo.");
}

// Ejercicio 54: Mayor de tres
function mayorDeTres(a: number, b: number, c: number) {
    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    console.log(`Ej 54: El mayor de ${a}, ${b}, ${c} es ${mayor}.`);
}

// Pruebas (Simulando lo que el usuario ingresaría)
igualOMayor(10, 20);
variableLadoDerecho(10);
verificarPositivos(-5, 8);
mayorDeTres(15, 42, 8);

export {};