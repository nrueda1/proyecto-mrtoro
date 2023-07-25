const config = require("./config.js")
const express = require("express");
const cors = require("cors");
const http = require("http")
const app = express();

app.use(cors());
app.use(express.json());

//server
const Server =()=>{
    const serverhttp = http.createServer(app)
    serverhttp.listen(config.port,config.ip)
    /*app.listen(3000,()=>{
        console.log(`El puerto esta en 3000`);
    })*/
};

const Rutas =()=>{
    app.use("/crack",require("./routes/index_routes"));
};

module.exports ={Server,Rutas}


