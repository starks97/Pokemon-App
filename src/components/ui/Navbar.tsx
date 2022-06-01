import React from "react";

import { useTheme, Text, Spacer, Link } from "@nextui-org/react";

import Image from "next/image";
import NextLink from "next/link";

type Props = {};

enum Routeprops {
  home = "/",
  favorites = "/favorites",
}

export function Navbar({}: Props) {
  const { theme } = useTheme();
  return (
    <>
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
        />
        <NextLink href={Routeprops.home} passHref>
          <Link>
            <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okemon
            </Text>
          </Link>
        </NextLink>

        <Spacer css={{ flex: 1 }} />
        <NextLink href={Routeprops.favorites} passHref>
          <Link css={{marginRight: '10px'}}>
            <Text color="white" h3>
              Favorites
            </Text>
          </Link>
        </NextLink>
      </div>
    </>
  );
}
