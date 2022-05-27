import { FC } from "react";
import { ResultProps } from "../../interfaces";

import { Grid, Card, Row, Text } from "@nextui-org/react";
import router from "next/router";

interface Props {
  pokemon: ResultProps;
  children?: React.ReactNode;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} onClick={() => onClick()}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
