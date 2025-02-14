import mongoose, { Document } from "mongoose";

interface IPokemon extends Document {
  id: number;
  name: string;
  type: string;
}

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
});

export default mongoose.model<IPokemon>("Pokemon", PokemonSchema);
