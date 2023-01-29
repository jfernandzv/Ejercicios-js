let fraseEntrada = prompt("Introduce la frase");

function vocales(frase){
    let fraseSalida = "";
    for (let letra of frase) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
        letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        //if (["a","e","i","o","u","A","E","I","O","U"].includes(letra)) {
            fraseSalida += letra;
        } else{
            continue;
        }
    }
    return fraseSalida;    
}

alert (`Frase sin consonantes = ${vocales(fraseEntrada)}`)

