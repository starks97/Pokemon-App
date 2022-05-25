import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Layout } from "../components/layouts";
import { fetchPokeAPI, baseURL } from "../app/api";
import { PokemonProps } from "../interfaces";

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <Layout tittle={""}>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = `${baseURL}`;
  const data = await fetchPokeAPI<PokemonProps>(url);

  return {
    props: {
      pokemons: data?.results || [],
    },
  };
};

export default Home;
