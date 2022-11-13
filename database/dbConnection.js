/*
    Promise-mysql envuelve todas las llamadas a la base de datos y las convierte a promesas, esto es útli para
    el uso de async await y sin el uso de callbacks en la query a la base de datos.
*/
import mysql from 'promise-mysql'
import {configDB} from './configDB.js';

/*
    En lugar de createConnection que crea una sola conexión, uso createPool para crear un grupo de conexiones y que estas no se
    pierdan. 
*/ 
const connection = mysql.createPool(configDB);

const getConnection = () => {
    return connection
}

export {
    getConnection
}

