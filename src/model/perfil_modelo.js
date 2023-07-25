const { getConnection } = require("./conexion_db");

async function Perfil(id_administrador){
    try {
    const conexion = getConnection()
    let resultadoPerfil = await conexion.execute(`SELECT nombre,apellido,correo_electronico FROM mydb.administrador where id_administrador = ?`,
    [id_administrador])
    resultadoPerfil = resultadoPerfil[0][0]
    if( typeof resultadoPerfil === "object"){
        return resultadoPerfil
    }
    }catch(error){
        console.log(error)
        return "Error"
    }
}


async function Actualizar_perfil(nombre,apellido,correo_electronico,id_administrador){
    try {
    const conexion = getConnection()
    let resultadoPerfil = await conexion.execute(`UPDATE mydb.administrador SET nombre = ?, apellido = ?,correo_electronico = ? where id_administrador = ?` ,
    [nombre,apellido,correo_electronico,id_administrador])
    resultadoPerfil = resultadoPerfil[0]
   if(resultadoPerfil.affectedRows === 1){
        return "Usuario Actualizado"
   }
    }catch(error){
        console.log(error)
        return "Error"
    }
}



module.exports = {Perfil,Actualizar_perfil}