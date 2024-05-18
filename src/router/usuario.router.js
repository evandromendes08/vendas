const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { removeUserAddressController, removeUserFavProduct } = require("../controller/database/usuario.controller");

router.get('/findById:id', usuarioController.findUserByController);
router.get('/findAll', usuarioController.findAllUserController);

router.post('/create', usuarioController.createUserController);
router.post('addAdress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id',usuarioController.addUserFavController);

router.put('/update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = router;