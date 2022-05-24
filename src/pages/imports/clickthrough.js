import React from "react"

import one from "../../components/img/assets/1.png"
import two from "../../components/img/assets/2.png"
import nine from "../../components/img/assets/9.png"

import logogradient from "../../components/img/assets/ADAO-Full-Logo-Blue-Gradient.png"

export default function Clickthrough() {
  return (
    <div className="section section__color" id="clickthrough">
      <div className="tabs-wrapper">
        <ul className="nav-tabs">
          <li
            className="nav-item tab is-active"
            data-role="tab"
            data-target="#tabs-home3"
          >
            Why ADAO
          </li>

          <li
            className="nav-item tab"
            data-role="tab"
            data-target="#tabs-profile3"
          >
            Our Tools
          </li>

          <li
            className="nav-item tab"
            data-role="tab"
            data-target="#tabs-messages3"
          >
            Governance Solutions
          </li>

          <li
            className="nav-item tab"
            data-role="tab"
            data-target="#tabs-messages4"
          >
            Open Source Approach
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-panel is-active" id="tabs-home3">
            <div className="tab-panel__text">
              <h1>Our Mission</h1>
              <p>
                ADAO is a DAO (decentralized autonomous organization) operating
                on the Cardano blockchain. By embodying the mantra of
                “Decentralization Together,” we hope to kindle imaginations and
                provide the framework and other resources for ideas to become
                the basis for separate autonomous entities all united by a
                common thread – decentralization. Community members will achieve
                this by voting to enact new policies and choose which best
                practices to adopt, from governance to funding. We are not
                constrained by legacy systems, but we are aided by a vision of a
                better future, allowing us to be agile and adaptive in our
                approach, seeking out solutions that can lead us to shared
                greatness.
              </p>
              <a
                className="btn vr"
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
            <div className="tab-panel__img">
              <img src={logogradient} alt="ADAO Logo" />
            </div>
          </div>
          <div className="tab-panel" id="tabs-profile3">
            <div className="tab-panel__text">
              <h1>Our Tools</h1>
              <p>
                Our developers are building tools to help usher in what could
                become an era of decentralization, but they need your help. Use
                our tools, let us know what works well and what doesn't, and ask
                questions if you have them.
              </p>
              <a
                className="btn vr"
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
            <div className="tab-panel__img">
              <img src={nine} alt="" />
            </div>
          </div>
          <div className="tab-panel" id="tabs-messages3">
            <div className="tab-panel__text">
              <h1>Trailblazing New Systems of Governance</h1>
              <p>
                Every organization is different. There is no one right way to
                solve governance, but we're familiar with the landscape and we
                can work with you to determine appropriate options for yours.
              </p>
              <a
                className="btn vr"
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
            <div className="tab-panel__img">
              <img src={one} alt="" />
            </div>
          </div>
          <div className="tab-panel" id="tabs-messages4">
            <div className="tab-panel__text">
              <h1>Open &amp; Transparent Code</h1>
              <p>
                As part of our commitment to decentralization, our tools are for
                you: the community. All of our tools are available as open
                source code on our GitHub. If you find any issues or have
                improvements to suggest, please get in touch with us!
              </p>
              <a
                className="btn vr"
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
            <div className="tab-panel__img">
              <img src={two} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
