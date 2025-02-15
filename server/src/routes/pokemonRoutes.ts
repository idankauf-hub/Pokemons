import express from "express";
import {
  addFavoritePokemon,
  getPokemonDetails,
  getPokemons,
} from "../controllers/pokemonController";

const router = express.Router();

router.get("/", getPokemons);
router.get("/:name", getPokemonDetails);
router.post("/", addFavoritePokemon);

export default router;
