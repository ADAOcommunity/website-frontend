import React from "react"
import Helmet from "react-helmet"

import "../components/style.scss"

export default function Home() {
  return <div>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap" rel="stylesheet" />
      <script src={'/main.js'}></script>
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
          <a class="btn vr" href="https://discord.gg/gNuF8npW9H" target="_blank" rel="noopener noreferrer">Get Involved</a>
        </div>
      </div>
    </div>

    <div class="section section__color">
      <div class="tabs-wrapper">
        <ul class="nav-tabs">
          <li class="nav-item tab is-active" data-role="tab" data-target="#tabs-home3">Why ADAO
          </li>

          <li class="nav-item tab" data-role="tab" data-target="#tabs-profile3">Our Tools
          </li>

          <li class="nav-item tab" data-role="tab" data-target="#tabs-messages3">Governance Solutions
          </li>

          <li class="nav-item tab" data-role="tab" data-target="#tabs-messages4">Open Source Approach
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-panel is-active" id="tabs-home3">
            <div class="tab-panel__text">
              <h1>Our Mission</h1>
              <p>ADAO is a DAO (decentralized autonomous organization) operating on the Cardano blockchain. By embodying the mantra of “Decentralization Together,” we hope to kindle imaginations and provide the framework and other resources for ideas to become the basis for separate autonomous entities all united by a common thread – decentralization. Community members will achieve this by voting to enact new policies and choose which best practices to adopt, from governance to funding. We are not constrained by legacy systems, but we are aided by a vision of a better future, allowing us to be agile and adaptive in our approach, seeking out solutions that can lead us to shared greatness.</p>
              <a class="btn vr" href="https://medium.com/@ADAOcommunity" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg> Read More</a>
            </div>
            <div class="tab-panel__img">
              <img src="ADAO-Full-Logo-Blue-Gradient.webp" alt="ADAO Logo" />
            </div>
          </div>
          <div class="tab-panel" id="tabs-profile3">
            <div class="tab-panel__text">
              <h1>Our Tools</h1>
              <p>Our developers are building tools to help usher in what could become an era of decentralization, but they need your help. Use our tools, let us know what works well and what doesn't, and ask questions if you have them.</p>
              <a class="btn vr" href="https://discord.gg/RmutweNfdE" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg> Read More</a>
            </div>
            <div class="tab-panel__img">
              <img src="9.png" alt="" />
            </div>
          </div>
          <div class="tab-panel" id="tabs-messages3">
            <div class="tab-panel__text">
              <h1>Trailblazing New Systems of Governance</h1>
              <p>Every organization is different. There is no one right way to solve governance, but we're familiar with the landscape and we can work with you to determine appropriate options for yours.</p>
              <a class="btn vr" href="https://discord.gg/RmutweNfdE" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg> Read More</a>
            </div>
            <div class="tab-panel__img">
              <img src="1.png" alt="" />
            </div>
          </div>
          <div class="tab-panel" id="tabs-messages4">
            <div class="tab-panel__text">
              <h1>Open &amp; Transparent Code</h1>
              <p>As part of our commitment to decentralization, our tools are for you: the community. All of our tools are available as open source code on our GitHub. If you find any issues or have improvements to suggest, please get in touch with us!</p>
              <a class="btn vr" href="https://github.com/adaocommunity" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg> Read More</a>
            </div>
            <div class="tab-panel__img">
              <img src="2.png" alt="" />
            </div>
          </div>
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