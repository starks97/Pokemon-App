import React from "react";
import { useState } from "react";

import { Grid, Card, Text, Button, Image, Container } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { PokemonInfo } from "../../interfaces";
import { localFavorite } from "../../utils";

interface Props {
  pokemon: PokemonInfo;
}

export default function PokePageCard({ pokemon }: Props) {
  const [isInFavorite, setIsInFavorite] = useState(
    localFavorite.existInFavorites(pokemon.id)
  );
  const onToggle = () => {
    localFavorite.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);
    if (isInFavorite) return;
    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
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

            <Button
              color="gradient"
              ghost={!isInFavorite}
              onClick={onToggle}
              css={{ "@xs": { size: "xs" } }}
            >
              {isInFavorite ? "In favorites" : "Add to favorites"}
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
