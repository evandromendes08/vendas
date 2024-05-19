const router = require("express").Router();

const authMiddleware = require("../middleware/auth.middleware");
const pedidoController = require("../controller/pedido.controller");


//const {  validapPedido } = require("../middlewares/validacao");

router.get("/find/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware /*, validaPedido*/, pedidoController.createPedidoController);

router.patch("/updateStatus/:id", authMiddleware/*, validaPedido*/, pedidoController.updateStatusPedidoController);

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);

module.exports = router;