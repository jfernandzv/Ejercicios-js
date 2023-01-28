// base 16 * 23 cm
//altura 13 cm

const volumen = 16*23*13;
console.log('volumen',volumen + ' cm3');
//areaLateral 2 * 13 * (23 + 16) cm
//areaBase = 16 * 23 cm
//areaTotal = areaLateral + 2 * areaBase

const areaLateral = 2*13*(23+16);
const areaBase = 16*23;
const areaTotal = areaLateral + 2*areaBase;
console.log("Área total",areaTotal + ' cm2');

const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base*altura*ancho
const area2 = 2*(altura*(base + ancho) + base*ancho)

console.log("Volumen 2",volumen2 + ' cm3')
console.log('Área 2',area2 + ' cm2')
