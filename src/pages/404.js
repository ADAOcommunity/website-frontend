import React from "react"

import Footer from "./imports/footer"
import Head from "./imports/head"
import Topnav from "./imports/topnav"

import plug from "../components/img/assets/11.png"

import "../components/style/style.scss"

export default function Home() {
  return (
    <div>
      <Head></Head>

      <Topnav></Topnav>

      <div className="section">
        <div className="section__horizontal">
          <div className="section__text fof">
            <img src={plug} alt="" />
          </div>
          <div className="section__text">
            <h1>404</h1>
            <h3>Sorry, that page wasn't found!</h3>
            
            <a
              className="btn vr"
              href="/"
            >
              Back home
            </a>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}
