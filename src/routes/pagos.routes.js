import { Router } from "express";
import { crearCarrito, recibirWebhook } from "../controllers/pagos.controllers.js";

const router = Router();

//http://localhost:3000/api/pagos

router.route("/orden-carrito").post(crearCarrito)
router.post("/webhook", recibirWebhook);

export default router;