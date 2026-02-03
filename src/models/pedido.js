import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  // Array para almacenar múltiples productos en un solo pedido
  servicios: [{
    servicio: {
      type: Schema.Types.ObjectId,
      ref: "servicio",
      required: true,
    },
    // id del usuario que realiza el pedido
    // usuario: {
    //   type: Schema.Types.ObjectId,
    //   ref: "usuario",
    //   required: true,
    // },
    cantidad: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  paymentId: {
    type: String,
    unique: true,
    sparse: true, 
  },
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Pendiente", "Aprobado", "Rechazado", "Fallido"],
  },
}, { timestamps: true }); 

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;