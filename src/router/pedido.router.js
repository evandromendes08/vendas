const router = require("express").Router();

const authMiddleware = require("../middleware/auth.middleware");
const pedidoController = require("../controller/pedido.controller");
const {validaPedido, validaId, } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware , validaPedido, pedidoController.createPedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaId, pedidoController.updateStatusPedidoController);

router.delete("/delete/:id", authMiddleware, validaId, pedidoController.deletePedidoController);

module.exports = router;