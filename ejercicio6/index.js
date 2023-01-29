const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

//Método for
let suma1 = 0;
for (let i=0; i<9;i++){
    suma1 += notas[i];
}

//Método for of
let suma2 = 0;
for (let valor of notas) {
    suma2 += valor;
} 

//alert ("Suma 2 = " + suma2)
alert (`Suma 1 = ${suma1}\nSuma 2 = ${suma2}`)