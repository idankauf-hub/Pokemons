import { Request, Response } from "express";
import pokemonService from "../services/pokemonService";

export const getPokemons = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = parseInt(req.query.offset as string) || 0;

    const data = await pokemonService.getPaginatedPokemons(limit, offset);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
