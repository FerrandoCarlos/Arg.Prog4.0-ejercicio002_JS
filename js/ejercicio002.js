/**
 * Utilizando la sentencia WHILE mostrar en consola desde 500 al 1000, inclusive. Incrementando de a 20. No mostrar los números 900 y 980.
 */

var inicio = 500;
var final = 1000;

while (inicio <= final) {
    if (inicio != 900 && inicio != 980) {
        console.log(inicio + "\n"); 
    }
    inicio += 20;
}