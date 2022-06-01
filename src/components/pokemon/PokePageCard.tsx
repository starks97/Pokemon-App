import React from "react";

import { Grid, Card, Text, Button, Image, Container } from "@nextui-org/react";

import { PokemonInfo } from "../../interfaces";

interface Props {
  pokemon: PokemonInfo;
}

export default function PokePageCard({ pokemon }: Props) {
  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card hoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world?.front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width="100%"
              height="200px"
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}
            </Text>

            <Button color="gradient" ghost>
              Save As Favorites
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>

            <Container direction="row" display="flex" gap={3}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
