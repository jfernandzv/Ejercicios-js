const enlaces = document.querySelectorAll("a");
const tercerParrafo = document.querySelectorAll("p")[2];

// TAMBIÉN PODRÍAMOS HABER USADO EL IDENTIFICADOR
// const tercerParrafo = document.getElementById("third-paragraph");

texto = `
        Número de enlaces de la página: ${enlaces.length}<br>
        El penúltimo enlace apunta a : ${enlaces[enlaces.length - 2].href}<br>
        Número de enlaces en el tercer párrafo: ${tercerParrafo.querySelectorAll("a").length}
        `;
const parrafo = document.createElement("p");
parrafo.innerHTML=texto;
parrafo.style.color = "Brown";
parrafo.style.fontWeight = "bold";
document.body.appendChild(parrafo);