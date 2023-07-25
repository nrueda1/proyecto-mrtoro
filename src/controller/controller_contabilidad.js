const {contabilidadRegistro,FunctionVentas} = require('../model/contabilidad_modelo');
const {verfityToken} = require ("../helpers/jwt.js")

const Contabilidad_Unico = async(request,response) => {
    try {
        const token = request.headers.authorization.split(' ').pop();
        const resultadotoken = verfityToken(token);

        if(resultadotoken.id){
            const {total_venta,dia_venta} = request.body
        const resultado = await contabilidadRegistro(dia_venta,total_venta,resultadotoken.id);
        console.log(resultado)
        if(resultado === "Registro Subido" ){
            response.status(200);
            response.json("Registrado Exitosamente");
        }else{
            response.status(400);
            response.json("Error al registrar")
        }
        }

    } catch (error) {
        console.error(error)
    }
};

const Traer_ventas = async (request,response) =>{
    try {
        let resultado = await FunctionVentas()
        if(resultado[0] ){
            response.status(200);
            response.json({ventas:resultado});
        }else{
            response.status(400);
            response.json("Error al registrar")
        }
    } catch (error) {
    }
}
module.exports = {Contabilidad_Unico,Traer_ventas}