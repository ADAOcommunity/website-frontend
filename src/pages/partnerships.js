import React from "react"

import Footer from "./imports/footer"
import Head from "./imports/head"
import Topnav from "./imports/topnav"

import metadex from "../components/img/partners/metadex.png"
import ratsdao from "../components/img/partners/ratsdao.png"
import scat from "../components/img/partners/scat.png"
import cardanosounds from "../components/img/partners/cardanosounds-1-01-300x300.png"
import liqwid from "../components/img/partners/LQLOGO.png"

import "../components/style/style.scss"

export default function Home() {
  return (
    <div>
      <Head></Head>

      <Topnav></Topnav>

      <div className="spacer vr"></div>

      <div className="section" data-aos="fade-down" data-aos-delay="300">
        <div class="section__text centered">
          <h1>Partnerships</h1>
        </div>
      </div>

      <AllPartners></AllPartners>

      <Footer></Footer>
    </div>
  )
}


function AllPartners() {
  return <div className="section section__color">
    <div className="section__text section__partners">
      <div className="card" data-aos="fade" data-aos-offset="-50">
        <div className="img">
          <img src={metadex} alt="MetaDEX Logo" />
        </div>
        <h3 className="bluetext">MetaDEX</h3>
        <div class="vertical">
          <a href="https://metadex.fi/" rel="noopener noreferrer" target="_blank">Website</a>
          <a href="https://medium.com/@ADAOcommunity/adao-announces-partnership-with-metadex-a836c7e8a2e7" rel="noopener noreferrer" target="_blank">Partnership Announcement</a>
        </div>
      </div>
      <div className="card vr" data-aos="fade" data-aos-offset="-50">
        <div className="img">
          <img src={ratsdao} alt="RatsDAO Logo" />
        </div>
        <h3 className="bluetext">RatsDAO</h3>
        <div class="vertical">
          <a href="https://www.ratsdao.io/" rel="noopener noreferrer" target="_blank">Website</a>
          <a href="https://twitter.com/ADAOcommunity/status/1483278506645606403?s=20&t=hYHLv5ys1bYqNei3vF6H7A" rel="noopener noreferrer" target="_blank">Partnership Announcement</a>
        </div>
      </div>
      <div className="card vr" data-aos="fade" data-aos-offset="-50">
        <div className="img">
          <img src={scat} alt="SCAT Logo" />
        </div>
        <h3 className="bluetext">SCAT DAO</h3>
        <div class="vertical">
          <a href="https://www.scatdao.com/" rel="noopener noreferrer" target="_blank">Website</a>
          <a href="https://medium.com/@ADAOcommunity/adao-partners-with-scat-dao-5d1cc2ff1578" rel="noopener noreferrer" target="_blank">Partnership Announcement</a>
        </div>
      </div>
      <div className="card vr" data-aos="fade" data-aos-offset="-50">
        <div className="img">
          <img src={liqwid} alt="SCAT Logo" />
        </div>
        <h3 className="bluetext">Liqwid Labs</h3>
        <div class="vertical">
          <a href="https://liqwid.finance/" rel="noopener noreferrer" target="_blank">Website</a>
          <a href="https://medium.com/@ADAOcommunity/adao-partners-with-liqwid-labs-d54e5e037cfb" rel="noopener noreferrer" target="_blank">Partnership Announcement</a>
        </div>
      </div>
      <div className="card vr" data-aos="fade" data-aos-offset="-50">
        <div className="img">
          <img src={cardanosounds} alt="SCAT Logo" />
        </div>
        <h3 className="bluetext">CardanoSounds</h3>
        <div class="vertical">
          <a href="https://www.cardanosounds.com/" rel="noopener noreferrer" target="_blank">Website</a>
          <a href="https://medium.com/@ADAOcommunity/adao-partners-with-cardano-sounds-1f5320e0f9e5" rel="noopener noreferrer" target="_blank">Partnership Announcement</a>
        </div>
      </div>
    </div>
  </div>
}