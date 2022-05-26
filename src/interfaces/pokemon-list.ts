export interface ResultProps {
  name: string;
  url: string;
  id: string;
  img: string;
}

export interface PokemonProps {
  results: ResultProps[];
}
