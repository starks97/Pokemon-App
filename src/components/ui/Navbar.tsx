import React from "react";

import { useTheme, Text, Spacer } from "@nextui-org/react";

import Image from "next/image";

type Props = {};

export function Navbar({}: Props) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon logo"
        width={70}
        height={70}
      ></Image>

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white" h3>
        Favorites
      </Text>
    </div>
  );
}
