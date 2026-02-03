import { Router } from "express";
import serviciosRoutes from './servicios.routes.js'
import usuariosRoutes from "./usuarios.routes.js";
import pagosRoutes from './pagos.routes.js'

const router = Router()
//http://localhost:3000/api/servicios/test
router.use('/servicios',serviciosRoutes)
router.use('/usuarios',usuariosRoutes)
router.use('/pagos',pagosRoutes)

export default router;
