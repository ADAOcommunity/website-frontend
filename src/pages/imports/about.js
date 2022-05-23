import React from "react"

import ten from "../../components/img/assets/10.png"

export default function About() {
  return <div className="section">
    <div className="section__horizontal">
      <div className="section__text">
        <img src={ten} alt="" />
      </div>
      <div className="section__text">
        <h5 className="bluetext">About ADAO</h5>
        <h3>Driven By Decentralization</h3>
        <p>
          At ADAO, we never stop thinking about decentralization. Our tools
          are designed to empower the community and promote decentralization
          throughout the ecosystem. We know that decentralization is a
          process, but we believe in the power of what we can accomplish if
          we work together.
        </p>

        <p>
          With our combined efforts, organizations will be able to govern
          themselves in new ways and incentivize members for contributions,
          while staying connected globally, any time, any day. This allows
          for open, fair ways to participate and be heard that suit your
          group's needs, whenever and wherever. The decentralized
          communities you form using the tools that we build will ultimately
          be the greatest measure of our success.
        </p>
        <a
          className="btn vr"
          href="https://discord.gg/gNuF8npW9H"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Involved
        </a>
      </div>
    </div>
  </div>;
}