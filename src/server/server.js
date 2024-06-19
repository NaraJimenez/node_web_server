const express = require('express');

//Para poder leer las carpetas
const path = require('path');

const startServer = (options) => {
    //Si no vinene nada que sea public
    const { port, public_path = 'public' } = options
    //console.log(port);
    //console.log(public_path);

    //Ejecutamos express
    const app = express();

    //Middleware para que esté disponible (use = para usarlos, es propio de express)
    app.use(express.static(public_path)); //Contenido estático disponible para ser usado

    //Para cuando hagan peticiones al server(devolvemos la web)
    app.get('*', (req, res) => {
        //Para poder ingresar en las carpetas
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)

        //Respondemos
        res.sendFile(indexPath);
    });

    //Para que escuche el servidor, se abre puerto  se escucha por ese puerto
    app.listen(port, () => {
        console.log(`Escuchando por el puerto ${port}`)
    })

}   

module.exports = {
    startServer
}