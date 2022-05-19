import React from "react"
import "../components/style.scss"

export default function Home() {
  return Hero()
}

function Hero() {
  return <div class="hero">
    <div class="hero__text">
      <h1>Decentralization Together</h1>
      <p>Providing open source tools to support DAO infrastructure and promote decentralization.</p>

      <img src={'/ADAO-Full-Logo-White.webp'} alt="ADAO Logo"/>
    </div>
  </div>
}