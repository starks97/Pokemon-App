import React from "react";

import { Grid, Card, Text, Button, Image, Container } from "@nextui-org/react";

type Props = {};

export default function FavoritesList({}: Props) {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh -100px)",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>{"Ther's not favorites"}</Text>
    </Container>
  );
}
