let numero;

// Usamos un bucle while que sigue ejecutándose hasta que el número ingresado sea -1
while (numero !== -1) {
    // Pedimos al usuario que ingrese un número
    numero = parseInt(prompt("Ingresa un número (ingresa -1 para terminar):"));

    // Verificamos si el número es diferente a -1
    if (numero !== -1) {
        console.log("Ingresaste el número: " + numero);
    }
}