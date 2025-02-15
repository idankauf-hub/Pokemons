import express from "express";
import {
  addFavoritePokemon,
  deleteFavoritePokemon,
  getPokemonDetails,
  getPokemons,
} from "../controllers/pokemonController";

const router = express.Router();

router.get("/", getPokemons);
router.get("/:name", getPokemonDetails);
router.post("/", addFavoritePokemon);
router.delete("/:name", deleteFavoritePokemon);

export default router;
