const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
   
});

const ModeloUsuario = mongoose.model('usuario', eschemausuario);
module.exports = router;

/*Ruta Ejemplo
router.get('/ejemplo', (req, res) => {
    res.end('Saludo desde Ejemplo de ruta');
});
*/

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });
    nuevousuario.save(function(err) {
        if(!err){
            res.send('Usuario agregado correctamente');
        }else{
            res.send(err);
        }
        
    })
})
