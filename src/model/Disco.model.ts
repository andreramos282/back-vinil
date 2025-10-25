import mongoose from "mongoose";

const DiscoSchema = new mongoose.Schema({
    titulo: { type: String, require: true },
    artista: { type: String, require: true },
    ano: { type: Date, require: true },
    genero: { type: String, require: true },
    formato: { type: String, require: true },
    preco: { type: Number, require: true }
})

const DiscoModel = mongoose.model("disco", DiscoSchema)

export default DiscoModel