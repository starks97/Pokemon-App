import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Grid } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { fetchPokeAPI, baseURL } from "../app/api";
import { PokemonProps, ResultProps } from "../interfaces";
import { generateId } from "../utils";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: ResultProps[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout tittle={""}>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = `${baseURL}`;
  const data = await fetchPokeAPI<PokemonProps>(url);

  const pokemons: ResultProps[] = data?.results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
