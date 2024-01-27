const express = require('express');
const app = express();

//Importar conexion mongoDB
const archivoBD = require('./conexion');

//Importacion de archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario');

//Importar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

app.use('/api/usuario/', rutausuario);

app.get('/', (req, res) =>{
    res.send('Bienvenidos el servidor Node.js esta corriendo');
})

//Configurar server básico
app.listen(5000, function(){
    console.log('Servidor iniciado y corriendo en el puerto 5000');
})