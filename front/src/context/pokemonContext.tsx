import { createContext, ReactNode, useContext } from "react";
import { Pokemon } from "../types/Pokemon";

interface IPokemonContext {
  favorites?: Pokemon[];
  addFavorite?: (pokemon: Pokemon) => void;
  removeFavorite?: (id: number) => void;
  isFavorite?: (id: number) => boolean;
}

const PokemonContext = createContext<IPokemonContext | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
