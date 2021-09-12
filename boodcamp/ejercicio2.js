var input1 = prompt("input 1: ");
var input2 = prompt("input 2: ");
var input3 = prompt("input 3: ");

var arr = [parseInt(input1), parseInt(input2), parseInt(input3)];
var max = Math.max(...arr);

document.write("El elemento más grande del arreglo [${arr} ], es: ${max}")
