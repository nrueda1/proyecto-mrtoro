const {Router} = require("express");
const router = Router();
const {Traer_perfil,Perfil_Actualizar} = require("./../controller/controller_perfil");
const {AutentificandoToken} = require("./../middleware/AutentificandoToken")


router.get("/perfil", AutentificandoToken, Traer_perfil)
router.put("/actualizarperfil",AutentificandoToken, Perfil_Actualizar)

module.exports = router;