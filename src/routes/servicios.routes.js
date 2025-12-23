import { Router } from "express";
import { crearServicio, prueba } from "../controllers/servicios.controllers.js";


const router = Router();
//aqui diseñamos todas las rutas para trabajar con los servicios
// get - post -put o patch - delete

router.route("/test").get(prueba)
//http://localhost:3000/api/servicios/
router.route('/').post(crearServicio)


export default router