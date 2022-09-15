//crear la variable 
let contador = 0;
//utilizar while para hacer el ciclo 
//si la condicion se cumple realiza el ciclo de lo contrario se detiene
while(contador < 3){
    //imprime el contenido de la variable
    console.log(contador);
    //aumenta el valor de la variable
    contador++;
}
//ciclo dowhile
//crear variable
let cont = 0;
//inicia el ciclo 
do{
    //se imprime el contenido de la variable 
    console.log(cont);
    //aumenta el valor de la variable para cumplir la condicion
    cont++;
//condicion del ciclo
}while (cont < 3)
//imprime el final del recorrido de la variable
console.log("fin del ciclo");

//ciclo for para javaScript
//se inicia con la variable, se realiza el condiconal y por ultimo aumenta el valor de la variable
for(let n=0; n<4;n++ ){
    console.log(n);
}console.log("fin del cliclo");

//ciclo con break
for(let n=0; n<=10; n++){
    console.log(n);
    if(n%2==0){
        console.log(n);
        break;
    }
}console.log("fin del ciclo con break")

//palabra continue para javaScript

for(let n=0; n<=10; n++){
    //comparacion estricta "!=="
    if(n%2 !== 0){
        continue;//ir a la siguiente iteracion
    }else{
        console.log(n)
    }
    //no importa el else 
    console.log(n)
}console.log("fin de la iteracion con continue")

//etiquetas para javaScript
//permiten ir a una parte del programa
inicio:
for(let n=0; n<=10;n++){
    if(n%2!==0){
        continue inicio;
    }
    console.log(n)
}
//con break
for(let n=0; n<=10;n++){
    inicio:
    if(n%2!==0){
        break inicio;
    }
    console.log(n)
}