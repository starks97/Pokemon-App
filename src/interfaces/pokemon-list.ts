export interface ResultProps<T> {
  name: T;
  url: T;
  id : T;
  img: T
}
export type GenericProps = ResultProps<string | object>;

export type PokemonProps = {
  results: GenericProps[];
};
