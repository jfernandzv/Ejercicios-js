function chekNumber(numero) {
    let salida = ""
    if (numero%2 === 0) {
        salida = "Número par"
    } else {
        salida = "Número impar"
    }
    return salida
}