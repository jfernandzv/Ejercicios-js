const numeros = [1,2,3,4,5];

let suma = 0;
for (let valor of numeros) {
    if (valor%2===0) {
        suma += valor;
    }    
} 

alert (`Suma de los pares = ${suma}`)