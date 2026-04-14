console.log("\n--- Ejercicios 57 a 62: Switch vs If ---");

// Ejercicios 57 y 60: Nombre del número (1 al 5)
function nombreNumeroSwitch(num: number) {
    switch (num) {
        case 1: console.log("Ej 57: uno"); break;
        case 2: console.log("Ej 57: dos"); break;
        case 3: console.log("Ej 57: tres"); break;
        case 4: console.log("Ej 57: cuatro"); break;
        case 5: console.log("Ej 57: cinco"); break;
        default: console.log("Ej 57: Número fuera de rango");
    }
}

// Ejercicios 58, 59, 61, 62: Analizar un caracter (Vocal, número, signo)
function analizarCaracterIf(char: string) {
    let c = char.toLowerCase();
    
    // Comprobar si es número
    if (c >= '0' && c <= '9') {
        console.log(`Ej 61/62: '${char}' es una cifra numérica.`);
    } 
    // Comprobar si es vocal
    else if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        console.log(`Ej 61/62: '${char}' es una vocal.`);
    } 
    // Comprobar puntuación básica
    else if (c === '.' || c === ',' || c === ';' || c === ':') {
        console.log(`Ej 61/62: '${char}' es un signo de puntuación.`);
    } 
    else {
        console.log(`Ej 61/62: '${char}' es una consonante u otro carácter.`);
    }
}

// Pruebas
nombreNumeroSwitch(3);
analizarCaracterIf('8');
analizarCaracterIf('e');
analizarCaracterIf(';');

export {};