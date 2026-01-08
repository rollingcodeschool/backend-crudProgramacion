import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionServicio = [
  body("servicio")
    .notEmpty()
    .withMessage("El servicio es un dato obligatorio")
    .isLength({
      min: 5,
      max: 100,
    })
    .withMessage("El servicio debe tener entre 5 y 100 caracteres")
    .isString()
    .withMessage("El servicio debe ser un texto")
    .custom(()=>{
        // todo: verificar que el nombre del servicio no este en la base de datos
    }),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionServicio;
