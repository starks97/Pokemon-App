import React from "react";
import { useState, useEffect } from "react";

import { GetStaticPaths, GetStaticProps } from "next";

import { Grid, Card, Text, Button, Image, Container } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { FavoritesList } from "../../components/ui";
import { localFavorite } from "../../utils";
import FavoritesPoke from "../../components/pokemon/FavoritesPoke";

export default function Index() {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorite.getPokemons());
  }, []);
  return (
    <Layout tittle={`Pokemon App | Favorites`}>
      {favoritesPokemon.length === 0 ? (
        <FavoritesList />
      ) : (
        <FavoritesPoke pokemons={favoritesPokemon} />
      )}
    </Layout>
  );
}
