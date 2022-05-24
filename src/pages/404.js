import React from "react"

import Footer from "./imports/footer"
import Head from "./imports/head"
import Topnav from "./imports/topnav"

import "../components/style/style.scss"

export default function Home() {
  return (
    <div id="index">
      <Head></Head>

      <Topnav></Topnav>

      
      <Footer></Footer>
    </div>
  )
}
