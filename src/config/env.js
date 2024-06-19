import env from 'dotenv';
//require('dotenv').config();
import envvar from 'env-var';
//const { get } = require('env-var');

env.config();

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}
 
//Exportamos
/*module.exports = {
    envs
}*/