import React, { FC } from "react";

import { Grid } from "@nextui-org/react";

import FavoritesCard from "../pokemon/FavoritesCard";

interface Props {
  pokemons: S;
}
type S = number[];

const FavoritesPoke: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokeId) => (
        <FavoritesCard
              key={pokeId}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
              id={pokeId}
              />
      ))}
    </Grid.Container>
  );
};

export default FavoritesPoke;
