const {Perfil,Actualizar_perfil} = require('../model/perfil_modelo');
const {verfityToken} = require ("../helpers/jwt.js");



const Traer_perfil = async(request,response) => {
    try {
        const token = request.headers.authorization.split(' ').pop();
        const resultado = verfityToken(token);
        const resultado_Perfil = await Perfil(resultado.id)
        if( typeof resultado_Perfil === "object" ){
            response.status(200);
            response.json(resultado_Perfil);
        }else{
            response.status(400);
            response.json("Error al traer Perfil")
        }
    } catch (error) {
        response.status(500)
        response.json("Error en la peticion para traer perfil")
    }
};
const Perfil_Actualizar = async(request,response) =>{
    try {
        const token = request.headers.authorization.split(' ').pop();
        const resultado = verfityToken(token);
        const{nombre,apellido,correo_electronico} = request.body
        console.log(nombre,apellido,correo_electronico)
        console.log(resultado)
        const resultado_perfil = await Actualizar_perfil(nombre,apellido,correo_electronico,resultado.id);
        if( resultado_perfil === "Usuario Actualizado"  ){
            response.status(200);
            response.json("Usuario Actualizado");
        }else{
            response.status(400);
            response.json("Error al Actualziar Perfil")
        }
    } catch (error) {
        response.status(500);
        response.json("Error de peticion al actualziar perfil")
        
    }
}

module.exports = {Traer_perfil,Perfil_Actualizar}