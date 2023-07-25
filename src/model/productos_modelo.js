const { getConnection } = require("./conexion_db");

async function registerFunctionProductoUnico(precio,nombre,tipos_productos){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.execute(`INSERT INTO mydb.producto (precio,nombre,tipos_productos) VALUES (?,?,?)
        `,[precio,nombre,tipos_productos])
        resultadoquery = resultadoquery[0]
        if(resultadoquery.affectedRows === 1){
            return "Producto Registrado"
        }
    } catch (error) {
        return "Error"
    }
      
        
}

async function FunctionProducto(){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.execute(`SELECT * FROM mydb.tipos_de_producto;
        `)
        resultadoquery = resultadoquery[0]
        if( typeof resultadoquery === "object"){
            return resultadoquery
        }
    }
     catch (error) {
        return "Error"
    }
      
}


async function registerarTipoProducto(nombre_tipo_producto){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.execute(`INSERT INTO mydb.tipos_de_producto (nombre_tipo_producto) VALUES (?)
        `,[nombre_tipo_producto])
        resultadoquery = resultadoquery[0]
        if(resultadoquery.affectedRows === 1){
            return "Tipo de Producto Registrado"
        }
    } catch (error) {
        return "Error"
    }
      
        
}


module.exports = {registerFunctionProductoUnico,FunctionProducto,registerarTipoProducto}


