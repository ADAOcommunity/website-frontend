import React from "react"
import Helmet from "react-helmet"

import "../components/style.scss"

export default function Home() {
  return <div>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>

    <Topnav></Topnav>
    <Hero></Hero>
    <div class="section">
      <div class="section__horizontal">
        <div class="section__text">
          <img src={'/10.png'} alt="" />
        </div>
        <div class="section__text">
          <h5 class="bluetext">About ADAO</h5>
          <h3>Driven By Decentralization</h3>
          <p>At ADAO, we never stop thinking about decentralization. Our tools are designed to empower the community and promote decentralization throughout the ecosystem. We know that decentralization is a process, but we believe in the power of what we can accomplish if we work together.</p>

          <p>With our combined efforts, organizations will be able to govern themselves in new ways and incentivize members for contributions, while staying connected globally, any time, any day. This allows for open, fair ways to participate and be heard that suit your group's needs, whenever and wherever. The decentralized communities you form using the tools that we build will ultimately be the greatest measure of our success.</p>
        </div>
      </div>
    </div>
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