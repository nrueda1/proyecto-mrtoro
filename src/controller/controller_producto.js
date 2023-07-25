const {registerFunctionProductoUnico,registerarTipoProducto} = require('../model/productos_modelo');
const {FunctionProducto} = require('../model/productos_modelo');

const Register_productoUnico = async(request,response) => {
    try {
        const {precio,nombre,tipos_productos,} = request.body
        const resultado = await registerFunctionProductoUnico(precio,nombre,tipos_productos);
        if(resultado === "Producto Registrado" ){
            response.status(200);
            response.json("Producto Registrado Exitosamente");
        }else{
            response.status(400);
            response.json("Error al registrar el producto")
        }
    } catch (error) {
        console.error(error)
    }
};


const Register_tipos_productos = async(request,response) => {
    try {
        const {nombre_tipo_producto} = request.body;
        const resultado = await registerarTipoProducto(nombre_tipo_producto);
        if( resultado === "Tipo de Producto Registrado" ){
            response.status(200);
            response.json(resultado);
        }else{
            response.status(400);
            response.json("Error para registrar el tipo de producto")
        }
    } catch (error) {
        console.error(error)
    }
};
const Traer_tipos_productos = async(request,response) => {
    try {
        const resultado = await FunctionProducto();
        if( typeof resultado === "object" ){
            response.status(200);
            response.json(resultado);
        }else{
            response.status(400);
            response.json("Error al traer tipo de producto")
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Register_productoUnico,Register_tipos_productos,Traer_tipos_productos}
