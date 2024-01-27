const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection;

objetobd.on('connected', () => {console.log('Conectado a la base de datos MongoDB')});
objetobd.on('error', () => {console.log('Error en la conexion a la base de datos MongoDB')});

module.exports = mongoose;