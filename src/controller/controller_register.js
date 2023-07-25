const {registerFunction} = require('../model/register_modelo');

const Register_admin = async(request,response) => {
    try {
        const {nombre,apellido,numero_de_documento,correo_electronico,contraseña,tipo_documento_id_documento,tipo_usuario} = request.body
        const resultado = await registerFunction(nombre,apellido,numero_de_documento,correo_electronico,contraseña,tipo_documento_id_documento,tipo_usuario);
        if(resultado === "Usuario Registrado" ){
            response.status(200);
            response.json("Usuario Registrado");
        }else{
            response.status(400);
            response.json("Error al registrar usuario")
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Register_admin}