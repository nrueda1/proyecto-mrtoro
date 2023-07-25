const {Router} = require('express');
const router = Router();
const fs = require('fs');


const pathRouter= `${__dirname}`;


const RemoverExt = (filename)=>{
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file)=>{
    const newfile = RemoverExt(file);
    /*const quitarindex =["index_routes"].includes(newfile);*/
    if(newfile != "index_routes"){
        router.use(`/${newfile}`,require(`./${newfile}`));
        console.log(`------>  ${newfile}`)
    }
})


router.get("*",(request,response)=>{
    response.status(404);
    response.send(`Not Found`);
})



module.exports = router



