const { getConnection } = require("./conexion_db");
const {tokenSing} = require("../helpers/jwt")

async function contabilidadRegistro(dia_venta,total_venta,id){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.execute(`INSERT INTO mydb.contabilidad (dia_venta,total_venta,Administrador_id_administrador) VALUES (?,?,?)
        `,[dia_venta,total_venta,id])
        resultadoquery = resultadoquery[0]
        console.log(resultadoquery)
        if(resultadoquery.affectedRows === 1){
            return "Registro Subido"
        }
    } catch (error) {
        console.log(error)
        return "Error"
    }
}

async function FunctionVentas(){
    try {
        const conexion = getConnection()
        let resultadoquery = await conexion.query(`SELECT date_format(contabilidad.dia_venta,'%Y-%m-%d  %H:%i:%s')as dia_venta,contabilidad.total_venta,administrador.nombre from mydb.contabilidad 
        left join mydb.administrador on mydb.contabilidad.Administrador_id_administrador =  administrador.id_administrador;
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

module.exports = {contabilidadRegistro,FunctionVentas}