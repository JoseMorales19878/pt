const express = require('express');
const router = express.Router();
const controller = require('../controller/usuario.controller');

//todos las rutas
router.get('/',controller.listado)
router.get('/:id',controller.id)
router.post('/',controller.insertar)
router.patch('/:id',controller.modificar)
router.delete('/:id',controller.eliminar)



module.exports = router;