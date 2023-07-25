const {autentificarLogin} = require('../model/login_modelo');

const Login_admin = async(request,response) => {
    try {
        const {Correo,Contraseña} = request.body
        const resultado = await autentificarLogin(Correo,Contraseña);
        if(resultado === "Usuario o Contraseña Incorrectos"){
            response.status(400)
            response.json("Usuario o Contraseña Incorrectos")
        }else if(resultado === "Error"){
            response.status(500)
            response.json("Error")

        }else{
            response.status(200)
            response.json(resultado)
        }
    } catch (error) {
        console.error(error)
    }
};

module.exports = {Login_admin}