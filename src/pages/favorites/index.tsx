import React from "react";

import { Layout } from "../../components/layouts";

type Props = {};

export default function index({}: Props) {
  return(
    <Layout tittle={'Pokemon App | Favorites'}>
        <h1>Favorites</h1>
    </Layout>
  )
}
