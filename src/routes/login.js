const {Router} = require("express");
const router_login  = Router();
const {Login_admin} = require("../controller/controller_login");

router_login.post('/auth',Login_admin)








module.exports = router_login;