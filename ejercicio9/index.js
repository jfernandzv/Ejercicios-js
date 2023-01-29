function celsiusToFahrenheit(grados) {
    return (grados*9/5 + 32)
}

const celsius = prompt("Introduce los grados Celsius")
alert(`${celsius}ºC equivalen a ${celsiusToFahrenheit(celsius)} F`)