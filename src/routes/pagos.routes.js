import { Router } from "express";
import { crearCarrito } from "../controllers/pagos.controllers.js";

const router = Router();

//http://localhost:3000/api/pagos

router.route("/orden-carrito").post(crearCarrito)


export default router;