import React from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/layouts";
import { PokemonInfo } from "../../interfaces";
import { URL, fetchPokeAPI } from "../../app/api";

interface Props {
  pokemon: PokemonInfo;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout tittle={""}>
      <h1>{pokemon.name}</h1>
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
  const url = `${URL}/${id}`;
  const data = await fetchPokeAPI<PokemonInfo>(url);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
