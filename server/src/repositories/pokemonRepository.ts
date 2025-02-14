import axios from "axios";
import { GET_POKEMONS_API } from "../constans";

export const getPaginated = async (limit: number, offset: number) => {
  const response = await axios.get(GET_POKEMONS_API, {
    params: { limit, offset },
  });
  return response.data;
};

export default {
  getPaginated,
};
