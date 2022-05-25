import React, { FC } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface LayoutProps {
  children: React.ReactElement;
  tittle?: string;
}

export const Layout: FC<LayoutProps> = ({ children, tittle }) => {
  return (
    <>
      <Head>
        <title>{tittle === "" ? "Pokemon App" : tittle}</title>
        <meta name="author" content="SkyCode Graphic" />
        <meta name="description" content="Pokemon Description" />
        <meta name="keywords" content="pokemon, description, description" />
      </Head>

      {/* <navbar/> */}
      <Navbar />

      <main style={{ padding: "0x 30px" }}>{children}</main>
    </>
  );
};
