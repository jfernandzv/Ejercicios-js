class cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    perimetro() {
        console.log(`Perímetro = ${4*this.lado} cm`);
    }
    area() {
        console.log(`Área = ${this.lado**2} cm2`);
    }
}

instancia1 = new cuadrado(2);
instancia2 = new cuadrado(5);
instancia3 = new cuadrado(10);
