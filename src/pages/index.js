import React from "react"
import Helmet from "react-helmet"

import "../components/style.scss"

export default function Home() {
  return <div>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@800&display=swap" rel="stylesheet" />
    </Helmet>

    <Topnav></Topnav>
    <Hero></Hero>
  </div>
}

function Topnav() {
  return <div class="navbar">
    <a class="navbar-brand" href="https://www.theadao.io/">
      <img src="/ADAO-Logo-ADAO-White.svg" class="logo" alt="ADAO Logo" />
    </a>

    <ul class="links">
      <li>
        <a title="Home" href="/">Home</a>
      </li>
      <li>
        <a title="Roundtable Multi-Sig dApp" href="https://roundtable.theadao.io/">Roundtable Multi-Sig dApp</a>
      </li>
      <li>
        <a title="Medium" href="https://roundtable.theadao.io/">Medium</a>
      </li>
      <li>
        <a title="GitHub" href="https://roundtable.theadao.io/">GitHub</a>
      </li>
    </ul>
  </div>;
}

function Hero() {
  return <div class="hero">
    <div class="hero__wrapper">
      <div class="hero__text">
        <h1>Decentralization Together</h1>
        <p>Providing open source tools to support DAO infrastructure and promote decentralization.</p>
      </div>

      <img src={'/ADAO-Full-Logo-White.webp'} alt="ADAO Logo"/>
    </div>
  </div>
}