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
    .withMessage("El servicio debe ser un texto"),
  // .custom(()=>{
  //      todo: verificar que el nombre del servicio no este en la base de datos
  // }),
  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .isFloat({
      min: 50,
      max: 1000000,
    })
    .withMessage("El precio debe estar entre $50 y $1000000"),
  body('imagen')
  .notEmpty()
  .withMessage('La imagen es un dato obligatorio')
  .isString()
  .withMessage('La imagen debe ser una cadena de texto')
  .matches(/^https:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)
  .withMessage('La imagen debe ser una URL válida que termine con .jpg, .jpeg, .png, gif, .webp, bmp o svg'),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionServicio;
