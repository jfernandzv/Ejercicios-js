const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numDni = prompt("Introduce el DNI");
if (numDni < 0 || numDni > 99999999) {
    alert("El número introducido no es válido");
} else {
    let letra = letras[numDni%23];
    alert("La letra de tu DNI es " + letra);
}
