import React from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";


import { Layout } from "../../components/layouts";
import { PokemonInfo } from "../../interfaces";
import { URL, fetchPokeAPI } from "../../app/api";
import {PokePageCard}from '../../components/pokemon'
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: PokemonInfo;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout tittle={`Pokemon App | ${pokemon.name}`}>
      <PokePageCard pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const getPokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: getPokemons.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    },
  };
};

export default PokemonPage;
