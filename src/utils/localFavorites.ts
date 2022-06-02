const toggleFavorite = (id: number) => {
  // Get the favorites from localStorage
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    // Remove the id from the favorites
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    // Add the id to the favorites
    favorites.push(id);
  }

  // Save the favorites to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number) => {
  if (typeof window === "undefined") return false;
  // Get the favorites from localStorage
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const getPokemons = () => {
  if(typeof window === "undefined") return false;

  // Get the favorites from localStorage
  return JSON.parse(localStorage.getItem("favorites") || "[]");

}

export default {
  toggleFavorite,
  existInFavorites,
  getPokemons
};
