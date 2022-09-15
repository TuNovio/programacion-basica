//clases en javaScript
class Equipo{
    //atributos static
    static contarEquipos = 0;
    //constructor
    /**
     * @param {String} nTipo, tipo de equipo a ingresar, nTipo != null && nTipo != ""
     * @param {String} nEstado, estado del equipo, nEstado != null && nEstado != ""
     * @param {any} nCantidad, cantidad del equipo ingresado, nCantidad > 0
     */
    constructor(nTipo, nEstado, nCantidad){
        this._tipo = nTipo;
        this._estado = nEstado;
        this._cantidad = nCantidad;
        Equipo.contarEquipos++;
    }
    //metodos

    /**
     * tipo de equipo
     */
    get darTipo(){
        return this._tipo;
    }
    /**
     * estado del equipo 
     */
    get darEstado(){
        return this._estado;
    }
    /**
     * cantidad de equipos
     */
    get darCantidad(){
        return this._cantidad;
    }
    /**
     * nuevo tipo de equipo 
     * @param {string} pTipo, tipo de equipo, pTipo != null && pTipo != ""
     */
    set nuevoTipo(pTipo){
        this._tipo = pTipo;
    }
    /**
     * nuevo estado de equipo
     * @param {string} pEstado, estado del equipo, pEstado != null && nEstado !=""
     */
    set nuevoEstado(pEstado){
        this._estado = pEstado;
    }
    /**
     * nueva cantidad de equipos
     * @param {any} pCantidad, cantidad de equipos, pCantidad > 0
     */
    set nuevaCantidad(pCantidad){
        this._cantidad = pCantidad;
    }
    //tipado static
    static saludar(){
        console.log("saludos desde static");
    }
}
//crear un objeto de la clase
let equipo1 = new Equipo("portatil", "dañado", 1);
console.log(equipo1);
//visualizar el get de Equipo 
console.log(equipo1.darEstado);
//cambiar tipo de Equipo
equipo1.nuevoTipo = "celular"
console.log(equipo1.darTipo)
//tipado static solo puede ser llamado por la clase
Equipo.saludar();
//atributos static en javaScript
console.log(Equipo.contarEquipos);