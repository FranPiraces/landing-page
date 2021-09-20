// Asignar benificios

// Variables: Sueldo, Edad

// Condiciones:

// Si el sueldo es menor a 500000 entonces alerta mensaje "Ud. es elegible para el beneficio"

// Si el sueldo es mayor a 500000 y la edad es mayor a 50 entonces alerta mensaje "Ud. es elegible para el beneficio"

// Si el sueldo es mayor a 500000 y la edad es menor a 50 entonces alerta mensaje "Ud. NO es elegible para el beneficio"
const sueldo = 400000
const edad = 35

if (sueldo < 500000) {
    alert("Ud. es elegible para el beneficio")
}
else {
if(sueldo > 500000 && edad > 50) {
alert("Ud. es elegible para el beneficio")    
}
else {
alert("Ud. NO es elegible para el beneficio")
}

}















// estructuras de datos:

// son VALORES que sirven para representar información y permitir crear algoritmos para realizar procedimientos



// Variables

const sueldo = 499999 //<-- expresion

const descuento = 15.35

const mensaje = "Tu aguinaldo fue enviado correctamente"



// Condicionales:

// Expresiones en lenguaje inglés que permiten recorrer distintos "CAMINOS" en función de determinadas variables

// if --> SI . ej: si el valor es menor a 500.000 entonces ......

// else --> SINO. ej: si el valor NO es menor a 500.000 entonces ....



if(sueldo < 500000) { //<-- Bloque. Espacio delimitado por los caracteres {}. Cuando una condición se cumple de manera satisfactoria, entonces se dice que el programa "ENTRA AL BLOQUE"

alert(mensaje)

} else {

alert("tu sueldo no cumple las condiciones")

}

