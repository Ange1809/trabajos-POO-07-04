console.log("\n--- Ejercicios 55 y 56: Operador Condicional (Ternario) ---");

// Ejercicio 55: Valor absoluto
function valorAbsoluto(num: number) {
    // Si num es mayor a 0, queda igual. Si no, se multiplica por -1
    let absoluto = (num >= 0) ? num : (num * -1);
    console.log(`Ej 55: El valor absoluto de ${num} es ${absoluto}`);
}

// Ejercicio 56: Menor de dos números
function menorDeDos(a: number, b: number) {
    let menor = (a < b) ? a : b;
    console.log(`Ej 56: El menor entre ${a} y ${b} es ${menor}`);
}

// Pruebas
valorAbsoluto(-45);
menorDeDos(100, 34);

export {};