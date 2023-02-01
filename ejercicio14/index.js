const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octurbre", "noviembre", "diciembre"]
const mesesLargos = meses.filter(mes => mes.length>7).map(mes=>mes.toUpperCase());
const numeroMeses = mesesLargos.length;
alert(`Meses largos:\t${mesesLargos}\nNº meses largos:\t${numeroMeses}`);