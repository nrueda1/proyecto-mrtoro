const {Server,Rutas} = require("./app");


const main =async() => {
    await Server();
    await Rutas();
};
main();