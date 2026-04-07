async function ejecutarEjercicios() {
    console.log("=== INICIANDO TODOS LOS EJERCICIOS ===");

    console.log("\n--- Ejercicio 1 ---");
    await import('./01_saludo.ts');

    console.log("\n--- Ejercicio 2 ---");
    await import('./02-suma_simple.ts'); 

    console.log("\n--- Ejercicio 3 ---");
    await import('./03_suma_larga.ts');

    console.log("\n--- Ejercicio 4 ---");
    await import('./04_producto.ts');

    console.log("\n--- Ejercicio 5 ---");
    await import('./05_resta.ts');

    console.log("\n--- Ejercicio 6 ---");
    await import('./06_division.ts');

    console.log("\n--- Ejercicio 7 ---");
    await import('./07_resto.ts');

    console.log("\n--- Ejercicio 8 ---");
    await import('./08_op_mixta_1.ts');

    console.log("\n--- Ejercicio 9 ---");
    await import('./09_op_mixta_2.ts');

    console.log("\n--- Ejercicio 10 ---");
    await import('./10_op_mixta_3.ts');

    console.log("\n--- Ejercicio 11 ---");
    await import('./11_op_mixta_4.ts');

//--------------------
    console.log("\n--- Ejercicio 12 ---");
    await import('./12_tres_variables.ts');

    console.log("\n--- Ejercicio 13 ---");
    await import('./13_variables_misma_linea.ts');

    console.log("\n--- Ejercicio 14 ---");
    await import('./14_producto_variables.ts');

    console.log("\n--- Ejercicio 15 ---");
    await import('./15_suma_variables.ts');
} 


ejecutarEjercicios();