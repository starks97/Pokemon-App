import { PokemonInfo } from "../interfaces";
import { fetchPokeAPI, URL } from "../app/api";

export async function getPokemonInfo(nameORid: string) {
  const url = `${URL}/${nameORid}`;
  const data = await fetchPokeAPI<PokemonInfo>(url);
  return {
    name: data.name,
    id: data.id,
    sprites: data.sprites,
  };
}
