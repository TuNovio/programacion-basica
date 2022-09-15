//clase producto
class Producto{
    //atribitos
    static contadorProducto=0;
    //constructor
    constructor(nNombre, nPrecio){
        this._nombre = nNombre;
        this._precio = nPrecio;
        this._idProducto = Producto.contadorProducto++;
    } 
    //metodos
    /**
     * optener el id del prducto
     * @return id del producto
     */
    getIdproducto(){
        return this._idProducto;
    }
    get darNombre(){
        return this._nombre;
    }
    get darPrecio(){
        return this._precio;
    }
    /**
     * @param {any} pNombre
     */
    set nuevoNombre(pNombre){
        this._nombre = pNombre;
    }
    /**
     * @param {any} pPrecio
     */
    set nuevoPrecio(pPrecio){
        this._precio = pPrecio;
    }
    toString(){
        return "IDProducto: " + this._idProducto + " " + "Nombre: " + this._nombre + " " 
        + "Precio: " + this._precio;
    }
}
//clase orden
class Orden{
    static contadorOrdenes = 0;
    static contarProductosAgregados = 0;
    static MAX_PRODUCTOS = 5;
    constructor(){
        this._productos = [];
        this._contador = ++Orden.contarProductosAgregados;
        if(Orden.contadorOrdenes<Orden.MAX_PRODUCTOS){
            this._idOrden = Orden.contadorOrdenes++;
        }else{
            console.log("se alcanzo la maxima capacidad de ordener");  
        }
    }
    getIdOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        try {
            if(this._productos.length > 0){
                for(let i=0; i<this._productos.length; i++){
                    if(this._productos[i].darNombre != producto.darNombre){
                        this._productos[i] = producto; 
                    }
                }
            }else{
                this._productos[0] = producto;
            }
        } catch (error) {
            console.log("Error orden.agregarProducto" + error);
        }
    }
    calcularTotal(){
        return this._contador;
    }
}
let miProducto = new Producto("carro", 2023);
console.log(miProducto.darNombre)
console.log(miProducto.getIdproducto())
console.log(miProducto.toString())

//
let miOrden = new Orden();
miOrden.agregarProducto(miProducto);
console.log(miOrden.calcularTotal())
let otra = new Orden();
otra.agregarProducto(miProducto);
console.log(otra.calcularTotal())
