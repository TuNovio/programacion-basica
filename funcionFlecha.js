/**
 * ? lista de numeros
 */
const lista = [1, 2, 3, 4, 5];
let ciclo = () => {
    for(let i=0; i<lista.length; i++){
        //?console.log(lista[i] + "\n")
        if(lista[i] >= 2){
            return "lista mayor a 2";
        }else{
            return lista[i];
        }
    }
}
//?console.log(ciclo());

//? funcion flecha para mensajes
let mensaje = (mio) =>{
    return mio;
}
console.log(mensaje("mi nombre es alfonso"));
