const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//server
const Server =()=>{
    app.listen(3000,()=>{
        console.log(`El puerto esta en 3000`);
    })
};

const Rutas =()=>{
    app.use("/crack",require("./routes/index_routes"));
};

module.exports ={Server,Rutas}


