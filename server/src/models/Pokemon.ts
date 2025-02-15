import { Schema, model, Document } from "mongoose";

export interface IFavoritePokemon extends Document {
  name: string;
}

const FavoritePokemonSchema = new Schema<IFavoritePokemon>({
  name: { type: String, required: true, unique: true },
});

export default model<IFavoritePokemon>(
  "FavoritePokemon",
  FavoritePokemonSchema
);
