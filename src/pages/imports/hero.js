import React from "react"

import logowhite from "../../components/img/assets/ADAO-Full-Logo-White.png"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__text" data-aos="fade-down" data-aos-delay="600">
          <h1>Decentralization Together</h1>
          <p>
            Providing open source tools to support DAO infrastructure and
            promote decentralization.
          </p>
        </div>

        <img src={logowhite} alt="ADAO Logo" data-aos="fade-down" data-aos-delay="300" />
      </div>
    </div>
  )
}