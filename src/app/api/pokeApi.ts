export const baseURL: string = " https://pokeapi.co/api/v2/pokemon?limit=151";

async function fetchPokeAPI<T = unknown | [] | object>(
  url: string
): Promise<T | undefined> {
  const data = await fetch(url);
  return await data.json();
}

export default fetchPokeAPI;
