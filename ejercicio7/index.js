const numeros = [1,2,3,4,5];

function sumaPares(numeros) {
    let suma = 0;
    for (let valor of numeros) {
        if (valor%2===0) {
            suma += valor;
        }    
    }
    return suma;
} 

alert (`Suma de los pares = ${sumaPares(numeros)}`)