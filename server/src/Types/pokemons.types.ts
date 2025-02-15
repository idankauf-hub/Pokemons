export interface EvolutionChain {
  chain: EvolutionChainLink;
}

export interface EvolutionChainLink {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChainLink[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDetail {
  [key: string]: any;
}

export interface Species {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  image: string;
  abilitiesNames: string[];
  typesNames: string[];
  evolutions: string[];
}

export interface PokemonAbilityData {
  ability: {
    name: string;
  };
}

export interface PokemonTypeData {
  type: {
    name: string;
  };
}
