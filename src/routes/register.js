const {Router} = require("express");
const router = Router();
const {Register_admin} = require("../controller/controller_register");

router.post('/hptelquelolea',Register_admin)







module.exports = router;