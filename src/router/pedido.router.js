const router = require("express").Router();

const authMiddleware = require("../middleware/auth.middleware");
const pedidoController = require("../controller/pedido.controller");
const {validaPedido, validaIdParams, validaProdutosCarrinhoPedido} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware,validaProdutosCarrinhoPedido, validaPedido, pedidoController.createPedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.updateStatusPedidoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.deletePedidoController);

module.exports = router;