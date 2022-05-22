import React from "react"
import Helmet from "react-helmet"

import one from "../components/img/assets/1.png"
import two from "../components/img/assets/2.png"
import nine from "../components/img/assets/9.png"
import ten from "../components/img/assets/10.png"
import wave from "../components/img/assets/wave.svg"

import logogradient from "../components/img/assets/ADAO-Full-Logo-Blue-Gradient.webp"
import logowhite from "../components/img/assets/ADAO-Full-Logo-White.webp"
import textlogo from "../components/img/assets/ADAO-Logo-ADAO-White.svg"
import tokendesign from "../components/img/assets/ADAO-Token-Design-e1644425619941.webp"

import metadex from "../components/img/partners/metadex.webp"
import ratsdao from "../components/img/partners/ratsdao.webp"
import scat from "../components/img/partners/scat.webp"

import "../components/style/style.scss"
import { withPrefix } from "gatsby"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>ADAO - Decentralization Together</title>
        <meta name="msapplication-TileColor" content="#0d152e" />
        <meta name="theme-color" content="#0d152e" />
        <meta name="description" content="At ADAO, we never stop thinking about decentralization. Our tools are designed to empower the community and promote decentralization throughout the Cardano ecosystem. We know that decentralization is a process, but we believe in the power of what we can accomplish if we work together. We're providing open source tools to support DAO infrastructure and promote decentralization." />
        <link rel="canonical" href="https://theadao.io/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ADAO - Decentralization Together" />
        <meta property="og:description" content="At ADAO, we never stop thinking about decentralization. Our tools are designed to empower the community and promote decentralization throughout the Cardano ecosystem. We know that decentralization is a process, but we believe in the power of what we can accomplish if we work together. We're providing open source tools to support DAO infrastructure and promote decentralization." />
        <meta property="og:url" content="https://theadao.io/" />
        <meta property="og:site_name" content="ADAO - Decentralization Together" />
        <link rel="shortlink" href="https://brazosriverblooms.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script src={withPrefix("/main.js")}></script>
      </Helmet>

      <Topnav></Topnav>
      <Hero></Hero>

      <div class="section">
        <div class="section__horizontal">
          <div class="section__text">
            <img src={ten} alt="" />
          </div>
          <div class="section__text">
            <h5 class="bluetext">About ADAO</h5>
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
              class="btn vr"
              href="https://discord.gg/gNuF8npW9H"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      <div class="section section__color">
        <div class="tabs-wrapper">
          <ul class="nav-tabs">
            <li
              class="nav-item tab is-active"
              data-role="tab"
              data-target="#tabs-home3"
            >
              Why ADAO
            </li>

            <li
              class="nav-item tab"
              data-role="tab"
              data-target="#tabs-profile3"
            >
              Our Tools
            </li>

            <li
              class="nav-item tab"
              data-role="tab"
              data-target="#tabs-messages3"
            >
              Governance Solutions
            </li>

            <li
              class="nav-item tab"
              data-role="tab"
              data-target="#tabs-messages4"
            >
              Open Source Approach
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-panel is-active" id="tabs-home3">
              <div class="tab-panel__text">
                <h1>Our Mission</h1>
                <p>
                  ADAO is a DAO (decentralized autonomous organization)
                  operating on the Cardano blockchain. By embodying the mantra
                  of “Decentralization Together,” we hope to kindle imaginations
                  and provide the framework and other resources for ideas to
                  become the basis for separate autonomous entities all united
                  by a common thread – decentralization. Community members will
                  achieve this by voting to enact new policies and choose which
                  best practices to adopt, from governance to funding. We are
                  not constrained by legacy systems, but we are aided by a
                  vision of a better future, allowing us to be agile and
                  adaptive in our approach, seeking out solutions that can lead
                  us to shared greatness.
                </p>
                <a
                  class="btn vr"
                  href="https://medium.com/@ADAOcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>{" "}
                  Read More
                </a>
              </div>
              <div class="tab-panel__img">
                <img src={logogradient} alt="ADAO Logo" />
              </div>
            </div>
            <div class="tab-panel" id="tabs-profile3">
              <div class="tab-panel__text">
                <h1>Our Tools</h1>
                <p>
                  Our developers are building tools to help usher in what could
                  become an era of decentralization, but they need your help.
                  Use our tools, let us know what works well and what doesn't,
                  and ask questions if you have them.
                </p>
                <a
                  class="btn vr"
                  href="https://discord.gg/RmutweNfdE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>{" "}
                  Read More
                </a>
              </div>
              <div class="tab-panel__img">
                <img src={nine} alt="" />
              </div>
            </div>
            <div class="tab-panel" id="tabs-messages3">
              <div class="tab-panel__text">
                <h1>Trailblazing New Systems of Governance</h1>
                <p>
                  Every organization is different. There is no one right way to
                  solve governance, but we're familiar with the landscape and we
                  can work with you to determine appropriate options for yours.
                </p>
                <a
                  class="btn vr"
                  href="https://discord.gg/RmutweNfdE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>{" "}
                  Read More
                </a>
              </div>
              <div class="tab-panel__img">
                <img src={one} alt="" />
              </div>
            </div>
            <div class="tab-panel" id="tabs-messages4">
              <div class="tab-panel__text">
                <h1>Open &amp; Transparent Code</h1>
                <p>
                  As part of our commitment to decentralization, our tools are
                  for you: the community. All of our tools are available as open
                  source code on our GitHub. If you find any issues or have
                  improvements to suggest, please get in touch with us!
                </p>
                <a
                  class="btn vr"
                  href="https://github.com/adaocommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>{" "}
                  Read More
                </a>
              </div>
              <div class="tab-panel__img">
                <img src={two} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__horizontal">
          <div class="section__text">
            <h3>Partnerships</h3>
            <p>Together we're building a more decentralized future.</p>
            <p>
              We're partnering with some of the top emerging projects on Cardano
              that are committed to decentralization
            </p>
          </div>

          <div class="section__text section__partners">
            <div class="img">
              <img src={metadex} alt="MetaDEX Logo" />
            </div>
            <div class="img">
              <img src={ratsdao} alt="RatsDAO Logo" />
            </div>
            <div class="img">
              <img src={scat} alt="SCAT Logo" />
            </div>
          </div>
        </div>
      </div>

      <div class="section section__color">
        <div class="section__horizontal rectangular-shape">
          <div class="section__text">
            <h2>$ADAO Governance Token</h2>

            <div class="accordion">
              <div class="accordion__tab">
                <input type="checkbox" id="chck1" />
                <label class="tab-label" for="chck1">
                  What is $ADAO?
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  The ADAO Governance Token is used to vote on proposals that
                  direct the actions of ADAO as an organization. Members of the
                  ADAO Community earn governance tokens as a bounty for work
                  done to promote the mission and projects of the DAO. Tokens
                  may be freely exchanged between members of the community with
                  no restriction.<br></br>
                  $ADAO Policy id:{" "}
                  <span class="force-break">
                    5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d
                  </span>
                </div>
              </div>
              <div class="accordion__tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">
                  ADAO Treasury - 77%
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  The greater majority of $ADAO Governance tokens will be
                  allocated to the treasury and governed by ADAO token holders.
                </div>
              </div>
              <div class="accordion__tab">
                <input type="checkbox" id="chck3" />
                <label class="tab-label" for="chck3">
                  Groundwork Bounty Program - 18.4%
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  This allocation will be minted into the treasury and is to be
                  used for onboarding new members & partner projects and
                  rewarding them for their contribution.
                </div>
              </div>
              <div class="accordion__tab">
                <input type="checkbox" id="chck4" />
                <label class="tab-label" for="chck4">
                  Initial Core Contributors - 2.6%
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  The amount allocated to “Initial Core Contributors” will be
                  split evenly between the 13 core members who got ADAO where it
                  is today.
                </div>
              </div>
              <div class="accordion__tab">
                <input type="checkbox" id="chck5" />
                <label class="tab-label" for="chck5">
                  Blockchain-wide Airdrop - 1.5%
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  This allocation will be distributed blockchain wide to
                  decentralize power and interest in ADAO to the wider Cardano
                  community.
                </div>
              </div>
              <div class="accordion__tab">
                <input type="checkbox" id="chck6" />
                <label class="tab-label" for="chck6">
                  Active Community Member Airdrop - 0.5%
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                  </svg>
                </label>
                <div class="tab-content">
                  This allocation has been earmarked as a way to reward early
                  interest in ADAO. It will be distributed equally to ADAO
                  Discord members who were in the server before token mint.
                </div>
              </div>
            </div>
          </div>

          <div class="section__text">
            <img
              class="staking-graphic vr"
              src={tokendesign}
              alt="ADAO Staking Token"
            />
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__text">
          <h1>Ready to dive into decentralization?</h1>
          <p>
            Join our growing, active Discord community and take part in the
            conversation there. Connect with ADAO members, ask questions, attend
            meetings, and find out how you can get involved.
            #DecentralizationTogether
          </p>
          <a href="https://discord.gg/gNuF8npW9H" class="btn vr">
            Join Now
          </a>
        </div>
      </div>

      <div class="section section__image" id="counting">
        <div class="section__text text-center">
          <div class="counters">
            <div class="counter">
              <h1 id="members"><div class="skeleton"></div></h1>
              <p>Discord Members</p>
            </div>
            <div class="counter">
              <h1 id="supporters"><div class="skeleton"></div></h1>
              <p>ADAO Supporters</p>
            </div>
            <div class="counter">
              <h1 id="builders"><div class="skeleton"></div></h1>
              <p>ADAO Builders</p>
            </div>
            <div class="counter">
              <h1 id="core"><div class="skeleton"></div></h1>
              <p>ADAO Core Contributors</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

function Topnav() {
  return (
    <div class="navbar">
      <a class="navbar-brand" href="https://www.theadao.io/">
        <img src={textlogo} class="logo" alt="ADAO Logo" />
      </a>

      <input type="checkbox" class="toggle" id="toggle" />

      <ul class="links">
        <li>
          <a title="Home" href="/">
            Home
          </a>
        </li>
        <li>
          <a
            title="Roundtable Multi-Sig dApp"
            href="https://roundtable.theadao.io/" rel="noopener noreferrer" target="_blank"
          >
            Roundtable Multi-Sig dApp
          </a>
        </li>
        <li>
          <a title="Medium" href="https://medium.com/@ADAOcommunity" rel="noopener noreferrer" target="_blank">
            Medium
          </a>
        </li>
        <li>
          <a title="GitHub" href="https://github.com/ADAOcommunity" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </li>
      </ul>


      <label for="toggle" aria-label="Open the menu" class="toggleLabel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      </label>
    </div>
  )
}

function Hero() {
  return (
    <div class="hero">
      <div class="hero__wrapper">
        <div class="hero__text">
          <h1>Decentralization Together</h1>
          <p>
            Providing open source tools to support DAO infrastructure and
            promote decentralization.
          </p>
        </div>

        <img src={logowhite} alt="ADAO Logo" />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div class="footer">
      <div class="footer__section">
        <img src={textlogo} class="logo" alt="ADAO Logo" />
        <p>
          Providing open source tools to support DAO infrastructure and promote
          decentralization.
        </p>
      </div>
      <div class="footer__section">
        <h3>Contact Info</h3>
        <p>
          Join our Discord, get in touch with us on Twitter, or send us an email
          if you have any questions or comments.
        </p>
        <ul class="social vr">
          <li class="social__card discord">
            <a href="https://discord.gg/pYwXkygtBa" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
              </svg>
            </a>
          </li>
          <li class="social__card twitter">
            <a href="https://twitter.com/ADAOcommunity" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
          <li class="social__card pinterest">
            <a href="https://medium.com/@ADAOcommunity" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
              </svg>
            </a>
          </li>
          <li class="social__card youtube">
            <a href="https://www.youtube.com/channel/UCUjqr4Cn_COlSUm7pa0O97g" rel="noopener noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__section">
        <p>
          © Copyright 2022. ADAO | $ADAO Policy id:{" "}
          <span class="force-break">
            5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d
          </span>
        </p>
      </div>
      <div class="footer__section">
        <ul class="links">
          <li>
            <a title="Home" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              title="Roundtable Multi-Sig dApp"
              href="https://roundtable.theadao.io/"
            >
              Roundtable Multi-Sig dApp
            </a>
          </li>
          <li>
            <a title="Medium" href="https://roundtable.theadao.io/">
              Medium
            </a>
          </li>
          <li>
            <a title="GitHub" href="https://roundtable.theadao.io/">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <img class="graphic" src={wave} alt="" />
    </div>
  )
}
