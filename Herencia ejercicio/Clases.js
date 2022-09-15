class Persona {
    //atributos

    /**
     * atributo para contar y dar numero a las personas
     */
    static contadorPersonas = 0;
    //constructor
    /**
     * contructor de la clase persona
     * @param {any} idPersona; identificador de la persona; idPersona != null && idPersona > 0
     * @param {String} nNombre; nombre de la persona; nNombre != null && nNombre != ""
     * @param {String} nApellido; apellido de la persona; nApellido != null && nApellido != ""
     * @param {any} nEdad; edad de la persona; nEdad != null && nEdad > 0
     */
    constructor(nNombre, nApellido, nEdad) {
        this._nombre = nNombre;
        this._apellido = nApellido;
        this._edad = nEdad;
        this._idPersona = Persona.contadorPersonas++;
    }
    //metodos
    /**
     * metodo para obtener el nombre de la persona
     *@return nombre de la persona
     */
    get darNombre() {
        return this._nombre;
    }
    /**
     * metodo para obtener el apellido de la persona 
     * @return apellido de la persona
     */
    get darApellido() {
        return this._apellido;
    }
    /**
     * metodo para obtener la edad de la persona
     * @return edad de la persona
     */
    get darEdad() {
        return this._edad;
    }
    /**
     * cambiar el valor del nombre de la persona
     * <br> pre: </br> el nombre se encuentra inicializado
     * <br> post: </br> se cambia el nombre
     * @param {String} pNombre, el nombre de la persona; pNombre != null && pNombre != ""
     */
    set nuevoNombre(pNombre) {
        this._nombre = pNombre;
    }
    /**
     * cambiar el valor del apellido de la persona
     * <br> pre: </br> el apellido se encuentra inicializado
     * <br> post: </br> se cambia el apellido
     * @param {String} pApellido, el apellido de la persona; pApellido != null && pApellido != ""
     */
    set nuevoApellido(pApellido) {
        this._apellido = pApellido;
    }
    /**
     * cambiar el valor de la edad de la persona
     * <br> pre: </br> la edad se encuentra inicializado
     * <br> post: </br> se cambia la edad
     * @param {any} pEdad, la edad de la persona; pEdad != null && pEdad != ""
     */
    set nuevoEdad(pEdad) {
        this._edad = pEdad;
    }

    /**
     * metodo para obtener la indentificacion de la persona
     * @return identificacion de la persona
     */
    getIdPersona() {
        return this._idPersona;
    }
    /**
     * metodo que muestra todos los atributos de la clase en formato strings
     * @return atributos de la clase
     */
    toString() {
        return "ID: " + this._idPersona + " " + "Nombre: " + this._nombre + " " + "Apellido: " + this._apellido + " " + "Edad: " +
            this._edad;
    }
}
let miPersona = new Persona("Alfonso", "gomajoa", 21);
console.log(miPersona.darApellido)
console.log(miPersona.getIdPersona())
console.log(miPersona.toString())

//creacion clase empleado
class Empleado extends Persona {
    static contadorEmpleados = 0;
    //constructor de la clase
    constructor(nNombre, nApellido, nEdad, nSueldo) {
        super(nNombre, nApellido, nEdad);
        this._sueldo = nSueldo;
        this._idEmpleado = Empleado.contadorEmpleados++;
    }
    //metodos
    get darSueldo() {
        return this._sueldo;
    }
    /**
     *@param {any} pSueldo
     */
    set nuevoSueldo(pSueldo) {
        this._sueldo = pSueldo
    }
    getIdEmpleado() {
        return this._idEmpleado;
    }
    toString() {
        return "IDPersona: " + this._idPersona + " " + "Nombre: " + this._nombre + " " + "Apellido: " + this._apellido + " " + "Edad: " + this._edad + " "
            + "IDEmpleado: " + this._idEmpleado + " " + "Sueldo: " + this._sueldo;
    }
}
let mio = new Empleado("Alfonso", "gomajoa", 21, 2000);
console.log(mio.darSueldo);
console.log(mio.toString())
console.log(mio.darApellido)
console.log(mio.getIdEmpleado())
class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nNombre, nApellido, nEdad, nFechaRegistro) {
        super(nNombre, nApellido, nEdad);
        this._fechaRegistro = nFechaRegistro;
        this._idCliente = Cliente.contadorClientes++;
    }
    //metodos
    get darFechaRegistro() {
        return this._fechaRegistro;
    }
    /**
     *@param {any} pFechaRegistro
     */
    set nuevaFechaRegistro(pFechaRegistro) {
        this._fechaRegistro = pFechaRegistro;
    }
    getIdCliente() {
        return this._idCliente;
    }
    toString() {
        return "IDPersona: " + this._idPersona + " " + "Nombre: " + this._nombre + " " + "Apellido: " + this._apellido + " " + "Edad: " +
            this._edad + " " + "IDCliente: " + this._idCliente + " " + "Fecha registro: " + this._fechaRegistro;
    }
}

let mic = new Cliente("Alfonso", "gomajoa", 21, "2020-10-05");
console.log(mic.toString())
console.log(mic.getIdCliente())
