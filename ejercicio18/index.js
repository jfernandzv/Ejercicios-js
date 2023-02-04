const botonGuardar = document.getElementById("guardar");
const inputNombre = document.getElementById("nombre");
const inputLetra = document.getElementById("letra");
inputLetra.maxlength = "2"
botonGuardar.addEventListener("click",guardar);
inputNombre.addEventListener("focus",function(){focoEnNombre(this)});
inputNombre.addEventListener("blur",function(){focoFueraDeNombre(this)});
inputLetra.addEventListener("change",function(){colorLetra(this)});

//Función utilizada para el Event Listener del botón guardar
function guardar() {
    alert("Vas a guardar");
}
//Función utilizada para el Event Listener al tener el foco
function focoEnNombre(elemento) {
    elemento.style.backgroundColor = "LightGreen";
}
//Función utilizada para el Event Listener al perder el foco
function focoFueraDeNombre(elemento) {
    elemento.style.backgroundColor = "White";
}
function colorLetra(elemento) {
    vocales = ["A","E","I","O","U"];
    if (vocales.includes(elemento.value.toUpperCase())){
        elemento.style.color = "Green";
    } else {
        elemento.style.color = "Red";
    }
}