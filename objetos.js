//objetos en javaScript
//para definir objetos se usa {} despues de la variable
let estudiante = {
    Nombre: "alfonso",
    Apellido: "gomajoa",
    Grado: "noveno", 
    Edad: 21,
    Promedio: 3.5, 
    //agregar metodos a objetos en javaScript
    nombreCompleto: function(){
        return this.Nombre + " " + this.Apellido;
    },
    //metodo para saber la edad y el promedio
    datos: function(){
        return this.Edad + " " + this.Promedio;
    }
}
console.log(estudiante.Nombre);
console.log(estudiante);
//llamar funcion del objeto
console.log(estudiante.nombreCompleto());
//llamar el segundo metodo del objeto
console.log(estudiante.datos());

//crear objetos
let profesor = new Object();
profesor.nombre = "juan";
profesor.apelido = "chalcuan";
profesor.profesion = "ing.mecatronica";
console.log(profesor);

//acceder a las propiedades de los objetos por for in
for(let p in profesor){
    //propiedades del objeto 
    console.log(p);
    //contenido de la propiedad del objeto
    console.log(profesor[p]);
    //las funciones no se pueden acceder
}

//agregar propiedades a un objeto
estudiante.celular = 316;
console.log(estudiante);
for(let p in estudiante){
    console.log(p)
} 
//eliminar propiedades de un objeto
delete estudiante.celular;
for(let p in estudiante){
    console.log(p)
}

//guardar propiedades de un objeto en array
let listaPropiedades = Object.values(profesor);
console.log(listaPropiedades);

//getter en javaScript
let administrativo = {
    nombre: "carlos", 
    apellido: "luul", 
    profesion: "aseador", 
    edad: 21,
    celular: 313,
    //dar nombre de administrativo 
    getNombre(){
        return this.nombre;
    },
    //dar apellido de administrativo 
    getApellido(){
        return this.apellido;
    }, 
    //cambiar nombre administrativo
    setNombre(nNombre){
        this.nombre = nNombre;
    }
}
//obtener nombre del administrativo
console.log(administrativo.getNombre());
//cambiar nombre del administrativo
administrativo.setNombre("lucas");
//visualizar el cambio de nombre
console.log(administrativo.getNombre());

//metodo constructor en javaScript
function Animal(nNombre, nRaza, nEdad, nPeso, nOrigen){
    this.nombre = nNombre;
    this.edad = nEdad;
    this.raza = nRaza;
    this.peso = nPeso;
    this.origen = nOrigen;
    //metodos 
    this.nombreCompleto = function(){
        return this.nombre + " " + this.edad
    }
}
//crear objetos
let animal = new Animal("pedro", "leon", 22, 30, "china");
console.log(animal);
console.log(animal.nombreCompleto())

//creacion de objetos
var mio = new Object();
var facil = {

}