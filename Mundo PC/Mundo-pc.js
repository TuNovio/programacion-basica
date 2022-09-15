class DispositivoEntrada {
    /**
     * @param {any} nTipoEntrada
     * @param {any} nMarca
     */
    constructor(nTipoEntrada, nMarca) {
        this._tipoEntrada = nTipoEntrada;
        this._marca = nMarca;
    }
    get darTipoEntrada() {
        return this._tipoEntrada;
    }
    get darMarca() {
        return this._marca;
    }
    /**
     * @param {any} pTipo
     */
    set nuevoTipoEntrada(pTipo) {
        this._tipoEntrada = pTipo;
    }
    /**
     * @param {any} pMarca
     */
    set nuevaMarca(pMarca) {
        this._marca = pMarca;
    }
}
/**
 * ?clase raton extends DispositivoEntrada  
 */
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(nTipoEntrada, nMarca) {
        super(nTipoEntrada, nMarca);
        this._idRaton = Raton.contadorRatones++;
    }
    toString() {
        return "IDRaton: " + this._idRaton + " "
            + "Tipo: " + this._tipoEntrada + " "
            + "Marca: " + this._marca;
    }
}
/**
 * ? clase teclado extends DispositivoEntrada
 */
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(nTipoEntrada, nMarca) {
        super(nTipoEntrada, nMarca);
        this._idTeclado = Teclado.contadorTeclados++;
    }
    toString() {
        return "IDTeclado: " + this._idTeclado + " " 
        +"Tipo: " + this._tipoEntrada + " "
        + "Marca: " + this._marca;
    }
}
/**
 * ? clase monitor 
 */
class Monitor {
    static contadorMonitores = 0;
    constructor(nMarcaM, nTamaño) {
        this._marcaMonitor = nMarcaM;
        this._tamaño = nTamaño;
        this._idMonitor = Monitor.contadorMonitores++;
    }
    /**
     * 
     */
    get darMarcaMonitor() {
        return this._marcaMonitor;
    }
    /**
     * 
     */
    get darTamañoMonitor() {
        return this._tamaño;
    }
    /**
     * @param {any} pMarcaMonitor
     */
    set marcaMonitor(pMarcaMonitor) {
        this._marcaMonitor = pMarcaMonitor;
    }
    /**
     * @param {any} pTamañoMonitor
     */
    set tamañoMonitor(pTamañoMonitor) {
        this._tamaño = pTamañoMonitor;
    }
    /**
     * 
     */
    toString() {
        return "IDMonitor: " + this._idMonitor + " " + "MarcaMonitor: " + this._marcaMonitor + " "
            + "tamañoMonitor: " + this._tamaño;
    }
}
/**
 * ? clase computadora
 */
class Computadora {
    static contadorComputadora = 0;
    constructor(nNombre, nMonitor, nTeclado, nRaton) {
        this._nombreComputadora = nNombre;
        this._monitor = nMonitor;
        this._teclado = nTeclado;
        this._raton = nRaton;
        this._idComputadora = Computadora.contadorComputadora++;
    }
    get darNombre() {
        return this._nombreComputadora;
    }
    get darMonitor() {
        return this._monitor;
    }
    get darTeclado() {
        return this._teclado;
    }
    get darRaton() {
        return this._raton;
    }
    get darIdComputadora() {
        return this._idComputadora;
    }
    /**
     * @param {any} pNombre
     */
    set nuevoNombreComputadora(pNombre) {
        this._nombreComputadora = pNombre;
    }
    /**
     * @param {any} pMonitor
     */
    set nuevoMonitor(pMonitor) {
        this._monitor = pMonitor;
    }
    /**
     * @param {any} pTeclado
     */
    set nuevoTeclado(pTeclado) {
        this._teclado = pTeclado;
    }
    /**
     * @param {any} pRaton
     */
    set nuevoRaton(pRaton) {
        this._raton = pRaton;
    }
    toString() {
        return "IdComputadora: " + this._idComputadora + " "
            + "NombreComputadora: " + this._nombreComputadora + " " + "\n"
            + "Monitor: " + this._monitor + " " + "\n"
            + "Teclado: " + this._teclado + " " + "\n"
            + "Raton: " + this._raton;
    }
}

/**
 * ? clase orden
 */
class Orden {
    static contadorOrdenes = 0;
    /**
     * 
     */
    constructor() {
        this._computadoras = [];
        this._idOrden = Orden.contadorOrdenes++;
    }
    /**
     * 
     */
    get darIdOrden() {
        return this._idOrden;
    }
    /**
     * 
     */
    agregarComputadora(computador) {
        if (this._computadoras.length > 0) {
            for (let i = 0; i < this._computadoras.length; i++) {
                if (this._computadoras[i].darNombre != computador.darNombre) {
                    this._computadoras[i] = computador;
                }
            }
        } else
            this._computadoras[0] = computador;
    }
    /**
     * 
     */
    mostrarOrden() {
		let rs = null;
        if (this._computadoras.length > 0 ) {
            for (let i=0; i<this._computadoras.length; i++) {
				rs = "IDOrden: " + this._idOrden + " " + "\n"
				+ "IdComputadora: " + this._computadoras[i].darIdComputadora + " "  + "\n"
				+ "NombreComputadora: " + this._computadoras[i].darNombre + " " + "\n"
				+ "Monitor: " + this._computadoras[i].darMonitor + " " + "\n"
				+ "Teclado: " + this._computadoras[i].darTeclado + " " + "\n"
				+ "Raton: " + this._computadoras[i].darRaton;
            }
        }else{
			console.log("no hay computadoras")
        }
		return rs;
    }
}
let miTeclado = new Teclado("pequeño", "asus");
let miRaton = new Raton("reducido", "acer");
let miMonitor = new Monitor("4K", "grande");
let miCompu = new Computadora("Personal", miMonitor, miTeclado, miRaton)
//console.log(miCompu.toString())
let miOrden = new Orden();
miOrden.agregarComputadora(miCompu);
console.log(miOrden.mostrarOrden());