export const baseURL: string = " https://pokeapi.co/api/v2/pokemon?limit=151";

export const URL: string = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokeAPI<T = unknown | [] | object>(
  url: string | Request
): Promise<T> {
  const data = await fetch(url);
  return await data.json();
}


export default fetchPokeAPI;
