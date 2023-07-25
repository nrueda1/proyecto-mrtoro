const {Router} = require("express");
const {Actualizar_admin} = require("./../controller/controller");

const router = Router();

router.get("/admin/actualizar", Actualizar_admin);

module.exports = router;