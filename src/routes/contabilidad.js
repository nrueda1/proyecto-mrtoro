const {Router} = require("express");
const router = Router();
const {AutentificandoToken} = require("./../middleware/AutentificandoToken")
const {Contabilidad_Unico,Traer_ventas} = require("./../controller/controller_contabilidad");

router.post("/contabilidad", AutentificandoToken,Contabilidad_Unico)
router.get("/ventas", AutentificandoToken,Traer_ventas)

module.exports = router;