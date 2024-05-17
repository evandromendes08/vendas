const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findById:id');
router.get('/findAll');

router.post('/create');
router.post('addAdress/:id');
router.post('/addFavProduct/:id');

router.put('/update/:id');

router.delete('/remouve/:id');
router.delete('/removeAdress');
router.delete('/removeFavProduct');

module.exports = router;