const {Router} = require("express");
const router = Router();
const {Register_productoUnico,Register_tipos_productos,Traer_tipos_productos} = require("./../controller/controller_producto");
const {AutentificandoToken} = require("./../middleware/AutentificandoToken")

router.post("/registrarproducto", AutentificandoToken,Register_productoUnico)
router.get("/traertiposproducto", AutentificandoToken,Traer_tipos_productos)
router.post("/producto",AutentificandoToken, Register_tipos_productos);

module.exports = router;