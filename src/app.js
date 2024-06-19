const { envs } = require('./config/env');
const { startServer } = require('./server/server');

//El servidor
const main = () => {
    //Traemos el servidor para iniciarlo
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion autoconvocada - una función agnostica asíncrona
(async () => {
    main()
})()