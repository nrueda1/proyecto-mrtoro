const { getConnection } = require("./conexion_db");
const {Encriptar} = require("../helpers/encrypt");

async function registerFunction(nombre,apellido,numero_de_documento,correo_electronico,contraseña,tipo_documento_id_documento,tipo_usuario){
    try {
        const conexion = getConnection()
        const contraseña_encriptada = await Encriptar(contraseña)
        let resultadoUser = await conexion.execute(`SELECT id_tipo_usuario FROM mydb.tipo_usuario where perfil = ?`, [tipo_usuario] )
        resultadoUser = resultadoUser[0][0] 
        resultadoUser=resultadoUser.id_tipo_usuario 
        let resultadoDocumento = await conexion.query(`SELECT id_documento FROM mydb.tipo_documento where tipo_documento = ? ;`, [tipo_documento_id_documento]) 
        resultadoDocumento = resultadoDocumento[0][0] 
        resultadoDocumento = resultadoDocumento.id_documento
        let resultadoquery = await conexion.execute(`INSERT INTO mydb.administrador (nombre,apellido,numero_de_documento,correo_electronico,contraseña,tipo_documento_id_documento,tipo_usuario_id_tipo_usuario) VALUES ( ?,?,?,?,?,?,? )
        `, [nombre,apellido,numero_de_documento,correo_electronico,contraseña_encriptada,resultadoUser,resultadoDocumento])
        resultadoquery = resultadoquery[0]
        if(resultadoquery.affectedRows === 1){
            return "Usuario Registrado"
        }
    } catch (error) {
        return "Error"
    }
      
        
}

module.exports = {registerFunction}