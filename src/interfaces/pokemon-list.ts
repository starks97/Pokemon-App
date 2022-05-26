export interface ResultProps {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface PokemonProps {
  results: ResultProps[];
}
