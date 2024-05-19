const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { removeUserAddressController, removeUserFavProductController } = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");

//rotas get
router.get('/findById/:id',authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUsersController);

//rotas post
router.post('/create', usuarioController.createUserController);
router.post('addAdress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id',usuarioController.addUserFavProductController);

//rotas put
router.put('/update/:id', usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', usuarioController.removeUserFavProductController);

module.exports = {
    router,
    removeUserAddressController,
    removeUserFavProductController,
}