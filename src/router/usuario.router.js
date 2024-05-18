const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { removeUserAddressController, removeUserFavProductController } = require("../controller/database/usuario.controller");

//rotas get
router.get('/findById:id', usuarioController.findUserByController);
router.get('/findAll', usuarioController.findAllUserController);

//rotas post
router.post('/create', usuarioController.createUserController);
router.post('addAdress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id',usuarioController.addUserFavController);

//rotas put
router.put('/update/:id', usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = {
    router,
    removeUserAddressController,
    removeUserFavProductController,
};