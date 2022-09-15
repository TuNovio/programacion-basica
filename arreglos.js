//arreglos para javaScript
//variable del tipo lista con array
let lista = new Array("a", "e", "i");
//variable declarada con "cons"
//cons variable modificable pero sin cambio de direccion de memoria
const vocal = ['a', 'e', 'i'];
//imprimir los valores de la lista const
console.log(vocal);
//imprimir los valores de la lista let
console.log(lista);

//elementos de los arreglos en javaScript

//acceder a los elementos por indices
console.log(vocal[0]);//primer elemento
//acceder a los elementos por ciclos
for(let n=0; n<vocal.length;n++){
    console.log(n);//imprimir los indices de la lista
    console.log(vocal[n]);//imprimir los elementos del arreglo
    //imprimir indices con elementos 
    console.log("indice: " + n + "Elemento: " + vocal[n]);
}

//modificar elementos de los arreglos
vocal[2] = "alfonso";//ingreso al indice a modificar
console.log(vocal[2]);//imprimo el elemento modificado

//agregar elementos al arreglo
vocal.push('u');
console.log(vocal);

//imprimir el tamaño del arreglo 
console.log(vocal.length);
//agregar un elemento en la ultima parte del arreglo
vocal[vocal.length] = 'o';
console.log(vocal);

//verificar el tipo de arreglo 
console.log(typeof vocal);
console.log(typeof lista);
console.log(Array.isArray(vocal));
console.log(lista instanceof Array)