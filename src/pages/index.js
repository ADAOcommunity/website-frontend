import React from "react"

import About from "./imports/about"
import Clickthrough from "./imports/clickthrough"
import Footer from "./imports/footer"
import Governance from "./imports/governance"
import Head from "./imports/head"
import Hero from "./imports/hero"
import Members from "./imports/members"
import Partners from "./imports/partners"
import Ready from "./imports/ready"
import Topnav from "./imports/topnav"

import "../components/style/style.scss"

export default function Home() {
  return (
    <div id="index">
      <Head></Head>

      <Topnav></Topnav>

      <Hero></Hero>
      <About></About>
      <Clickthrough></Clickthrough>
      <Partners></Partners>
      <Governance></Governance>
      <Ready></Ready>
      <Members></Members>

      <Footer></Footer>
    </div>
  )
}
