const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { removeUserAddressController, removeUserFavProductController } = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const {validaUsuario, validaEndereco, validaIdParams, valida_IdBody} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas get
router.get('/findById/:id',authMiddleware, validaIdParams,usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);

//rotas post
router.post('/create', validaUsuario,usuarioController.createUserController);
router.post('addAdress/:id', authMiddleware,validaIdParams, validaEndereco, usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware,validaIdParams, valida_IdBody,usuarioController.addUserFavProductController);

//rotas put
router.put('/update/:id', authMiddleware,validaIdParams, validaUsuario,usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete('/removeAdress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', authMiddleware, validaIdParams, usuarioController.removeUserFavProductController);

module.exports = {
    router,
    removeUserAddressController,
    removeUserFavProductController,
}