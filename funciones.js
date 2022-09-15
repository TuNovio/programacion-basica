//funciones en javaScript
function miFuncion(){
    console.log("dentro de la funcion");
}
//llamar la funcion de lo contrario no funciona
miFuncion();

//funcion con argumentos 
// argumento a y b
function argumentos(a, b){
    console.log("suma" + (a+b));
}
argumentos(2, 4);

//funcion con retorno 
function presentacion(nombre, edad){
    return "nombre: " + nombre +"/"+  "edad: " + edad;
}
console.log(presentacion("alfonso", 21));

/* //funciones anonimas para una variable
//en este caso termina en ;
let x = function (a, b){return a+b};
//para utilizar la varible con la funcion es necesario utilizar otra variable
//asigno valores de la variable con funcion
let r = x(2, 4)
//imprimo la variable creada
console.log(r) */
//funciones que se pueden llamar asi mismas o self invoke
(function (x, z){
    console.log(x+z);
})(2, 5);

//funciones flecha javaScript
const sumaFuncionFlecha = (a, b) => {
    return a+b;
}
console.log(sumaFuncionFlecha(1, 2))

//parametros predefinidos
function predefinidos (a = "alfonso", b = 22){
    return "Nombre: " + a + "/" + "edad: " + b;
}console.log(predefinidos());
//cambiar los valores predefinidos
console.log(predefinidos("sebas", 24));

//referencias 
//declaracion de un objeto
const personas = {
    nombre: 'alfonso',
    apellido: 'gomajoa',
    edad: 21,
    profesion: 'ing.sistemas'
}
//uso de un objeto
function valores(persona){
    console.log(persona.nombre);
    //cambiar los valores
    persona.edad = 30;
    return "edad de la persona cambiada: " + persona.edad
}console.log(valores(personas))
