import React from "react";

import { Grid, Card, Row, Text } from "@nextui-org/react";

import router from "next/router";

interface Props {
  key: number;
  src: string;
  id: number;
}

export default function FavoritesCard({ key, src, id }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={key}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={handleClick}>
        <Card.Image src={src} width={"100%"} height={"100%"} />
      </Card>
    </Grid>
  );
}
