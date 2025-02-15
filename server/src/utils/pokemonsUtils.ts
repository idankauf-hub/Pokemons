import { EvolutionChainLink } from "../Types/pokemons.types";

export const extractEvolution = (chain: EvolutionChainLink): string[] => {
  if (!chain?.evolves_to || chain.evolves_to.length === 0) {
    return [];
  }
  const evolutionStages: string[] = [];
  let currentStage: EvolutionChainLink | null = chain;

  while (currentStage) {
    evolutionStages.push(currentStage?.species?.name);
    currentStage =
      currentStage?.evolves_to && currentStage.evolves_to.length > 0
        ? currentStage.evolves_to[0]
        : null;
  }
  return evolutionStages;
};
