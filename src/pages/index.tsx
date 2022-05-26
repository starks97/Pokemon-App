import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { Layout } from "../components/layouts";
import { fetchPokeAPI, baseURL } from "../app/api";
import { PokemonProps, ResultProps } from "../interfaces";
import { generateId } from "../utils";

interface Props {
  pokemons: ResultProps[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout tittle={"Home | Pokemon List"}>
      <ul>
        {pokemons.map(({ id, name, img }) => {
          return (
            <li key={id}>
              {` ${name}`}
              <Image src={img} width={30} height={30}></Image>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = `${baseURL}`;
  const data = await fetchPokeAPI<PokemonProps>(url);

  const pokemons: ResultProps[] = data?.results.map((poke) => {
    return {
      ...poke,
      id: generateId(),
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
    };
  });

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
