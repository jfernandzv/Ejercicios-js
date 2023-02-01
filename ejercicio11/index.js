function esMayusOMinus(texto) {
    let salida = "";
    if (texto === texto.toUpperCase()) {
        salida = "Todas son mayúsculas";
    } else if (texto === texto.toLowerCase()) {
        salida = "Todas son minúsculas";
    } else {
        salida = "El texto tiene mayúsculas y minúsculas";
    }
    return salida;
}
const texto = prompt ("Escribe el texto");
alert (esMayusOMinus(texto));