const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { removeUserAddressController, removeUserFavProductController } = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const {validaUsuario} = require("../middleware/validacao.middleware");

//rotas get
router.get('/findById/:id',authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUsersController);

//rotas post
router.post('/create', validaUsuario,usuarioController.createUserController);
router.post('addAdress/:id', authMiddleware,usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware,usuarioController.addUserFavProductController);

//rotas put
router.put('/update/:id', authMiddleware, validaUsuario,usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', authMiddleware, usuarioController.removeUserController);
router.delete('/removeAdress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', authMiddleware, usuarioController.removeUserFavProductController);

module.exports = {
    router,
    removeUserAddressController,
    removeUserFavProductController,
}