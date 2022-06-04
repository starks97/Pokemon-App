import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";

import { PokemonProps, ResultProps, PokemonInfo } from "../../interfaces";
import { fetchPokeAPI, baseURL, URL } from "../../app/api";
import { Layout } from "../../components/layouts";
import { PokePageCard } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: PokemonInfo;
}

export default function PokemonbyNamePage({ pokemon }: Props) {
  return (
    <Layout tittle={`Pokemon App | ${pokemon.name}`}>
      <PokePageCard pokemon={pokemon} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const url = `${baseURL}`;
  const data = await fetchPokeAPI<PokemonProps>(url);
  const pokemonsNames = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemonsNames.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
