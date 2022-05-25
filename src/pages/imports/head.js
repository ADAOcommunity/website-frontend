import React from "react"

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

export default function Head() {
  return (
    <Helmet>
      <title>ADAO - Decentralization Together</title>
      <meta name="msapplication-TileColor" content="#0d152e" />
      <meta name="theme-color" content="#0d152e" />
      <meta
        name="description"
        content="At ADAO, we never stop thinking about decentralization. Our tools are designed to empower the community and promote decentralization throughout the Cardano ecosystem. We know that decentralization is a process, but we believe in the power of what we can accomplish if we work together. We're providing open source tools to support DAO infrastructure and promote decentralization."
      />
      <link rel="canonical" href="https://theadao.io/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ADAO - Decentralization Together" />
      <meta
        property="og:description"
        content="At ADAO, we never stop thinking about decentralization. Our tools are designed to empower the community and promote decentralization throughout the Cardano ecosystem. We know that decentralization is a process, but we believe in the power of what we can accomplish if we work together. We're providing open source tools to support DAO infrastructure and promote decentralization."
      />
      <meta property="og:url" content="https://theadao.io/" />
      <meta
        property="og:site_name"
        content="ADAO - Decentralization Together"
      />
      <link rel="shortlink" href="https://theadao.io/" />
      <script src={withPrefix("/main.js")} async></script>
      <link href={withPrefix("/aos.css")} rel="stylesheet" async />
      <script src={withPrefix("/aos.js")} async></script>
    </Helmet>
  )
}
