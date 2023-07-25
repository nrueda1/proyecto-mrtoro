
const jwt = require(`jsonwebtoken`)
const {token_key} = require("../config.js")


const tokenSing = async (user) => {
    return jwt.sign({
        id: user.id_administrador,
        role: user.tipo_usuario_id_tipo_usuario
    },
    token_key,
    {
        expiresIn: "3h"
    }
    )
}

const verfityToken =  (token) =>{
    try{
        return jwt.verify(token, token_key)
    } catch(e){
        console.log(e)
        return null
    }
}

module.exports = {tokenSing,verfityToken}

