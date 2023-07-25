require("dotenv").config({path:'./../.env'});

module.exports= {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DBDATABASE,
    token_key:process.env.TOKEN_KEY,
    port:process.env.PORT,
    ip:process.env.IP
}