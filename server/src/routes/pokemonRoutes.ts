import express from "express";
import { getPokemons } from "../controllers/pokemonController";

const router = express.Router();

router.get("/", getPokemons);

export default router;
