const brypt = require("bcryptjs");

const Encriptar = async(textoplano)=>{
    const hash = await brypt.hash(textoplano, 10);
    return hash;
};

const Comparar = async(contraseña, hashcontraseña)=>{
    return await brypt.compare(contraseña,hashcontraseña);
};

module.exports={Encriptar,Comparar}

