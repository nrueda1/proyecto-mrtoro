const {verfityToken} = require ("../helpers/jwt.js")
const AutentificandoToken =  function (request,response,next){
    try {
        const token = request.headers.authorization.split(' ').pop();
        if(token){
            const token_data = verfityToken(token);
            if(token_data != null){
                if(token_data.id){
                    next();
                }else{
                    response.status(403);
                    response.json('no_hay_autorizacion'); 
                }
            }else{
                response.status(403);
                response.json('no_hay_autorizacion');
            }
        }else{
            response.status(403);
            response.json('no_hay_autorizacion');
        }
    } catch (error) {
        console.log(error);
        response.status(409);
        response.json('error_para_autorizar_token'); 
    }
}

module.exports = {AutentificandoToken}