const express = require('express');
const app = express();

//Importar conexion mongoDB
const archivoDB = require('./conexion');


app.get('/', (req, res) =>{
    res.send('Bienvenidos el servidor Node.js esta corriendo');
})

//Configurar server básico
app.listen(5000, function(){
    console.log('Servidor iniciado en el puerto 5000');
})