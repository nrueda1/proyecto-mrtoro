const { getConnection } = require("./conexion_db");
const {Comparar} = require("../helpers/encrypt");
const {tokenSing} = require("../helpers/jwt")



async function autentificarLogin(Correo,Contraseña){
    try {
    const conexion = getConnection()
    let resultadoLogin = await conexion.execute(`SELECT * FROM mydb.administrador where correo_electronico = ?`, [Correo])
    resultadoLogin = resultadoLogin[0][0]
    if(resultadoLogin){
        const resultadoComparacion =  await Comparar(Contraseña,resultadoLogin.contraseña)
        if(resultadoComparacion === true){
            const token = await tokenSing(resultadoLogin)
            return token
        }else{
            return "Usuario o Contraseña Incorrectos"
        }
    }else{
        return "Usuario o Contraseña Incorrectos"
    }
    } catch (error) {
        return "Error"
    }    
}


module.exports = {autentificarLogin}