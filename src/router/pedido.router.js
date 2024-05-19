const router = require("express").Router();

const authMiddleware = require("../middleware/auth.middleware");
const pedidoController = require("../controller/pedido.controller");
const {validaPedido} = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware , validaPedido, pedidoController.createPedidoController);

router.patch("/updateStatus/:id", authMiddleware, pedidoController.updateStatusPedidoController);

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);

module.exports = router;