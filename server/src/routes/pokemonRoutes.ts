import express from "express";
import {
  getPokemonDetails,
  getPokemons,
} from "../controllers/pokemonController";

const router = express.Router();

router.get("/", getPokemons);
router.get("/:name", getPokemonDetails);

export default router;
