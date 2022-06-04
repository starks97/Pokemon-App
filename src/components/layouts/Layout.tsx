import React, { FC } from "react";

import { useRouter } from "next/router";

import Head from "next/head";

import { Navbar } from "../ui";

interface LayoutProps {
  children: React.ReactElement;
  tittle?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, tittle }) => {
  return (
    <>
      <Head>
        <title>{tittle === "" ? "Pokemon App" : tittle}</title>
        <meta name="author" content="SkyCode Graphic" />
        <meta name="description" content="Pokemon Description" />
        <meta name="keywords" content="pokemon, description, description" />
        <meta property="og:title" content={`information about ${tittle}`} />
        <meta property="og:description" content={`Page About Pokemon | ${tittle}`} />
        <meta
          property="og:image"
          content={`${origin}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.eaa34bba.png&w=640&q=75`}
        />
      </Head>

      {/* <navbar/> */}
      <Navbar />

      <main style={{ padding: "0x 30px" }}>{children}</main>
    </>
  );
};
