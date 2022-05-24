import React from "react"

import Branding from "./imports/branding"

import "../components/style/style.scss"

import Footer from "./imports/footer"
import Head from "./imports/head"
import Topnav from "./imports/topnav"

export default function Home() {
  return (
    <div>
      <Head></Head>

      <Topnav></Topnav>

      <div className="spacer vr"></div>

      <div className="section">
        <div class="section__text centered">
          <h1>Partnerships</h1>
        </div>
      </div>

      <Branding></Branding>

      <Footer></Footer>
    </div>
  )
}
