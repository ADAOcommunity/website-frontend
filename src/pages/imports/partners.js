import React from "react"

import metadex from "../../components/img/partners/metadex.png"
import ratsdao from "../../components/img/partners/ratsdao.png"
import scat from "../../components/img/partners/scat.png"

export default function Partners() {
  return (
    <div className="section">
      <div className="section__horizontal">
        <div className="section__text">
          <h6>Partnerships</h6>
          <h3>Together we're building a more decentralized future.</h3>
          <p>
            We're partnering with some of the top emerging projects on Cardano
            that are committed to decentralization
          </p>
          <a
            className="btn vr"
            href="/partnerships"
          >
            View All
          </a>
        </div>

        <div className="section__text section__partners">
          <div className="img">
            <img src={metadex} alt="MetaDEX Logo" />
          </div>
          <div className="img">
            <img src={ratsdao} alt="RatsDAO Logo" />
          </div>
          <div className="img">
            <img src={scat} alt="SCAT Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
