import React from "react"

import tokendesign from "../../components/img/assets/ADAO-Token-Design-e1644425619941.webp"

export default function Governance() {
  return (
    <div className="section section__color">
      <div className="section__horizontal rectangular-shape">
        <div className="section__text">
          <h2>$ADAO Governance Token</h2>

          <div className="accordion">
            <div className="accordion__tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label" htmlFor="chck1">
                What is $ADAO?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                The ADAO Governance Token is used to vote on proposals that
                direct the actions of ADAO as an organization. Members of the
                ADAO Community earn governance tokens as a bounty for work done
                to promote the mission and projects of the DAO. Tokens may be
                freely exchanged between members of the community with no
                restriction.<br></br>
                $ADAO Policy id:{" "}
                <span className="force-break">
                  5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d
                </span>
              </div>
            </div>
            <div className="accordion__tab">
              <input type="checkbox" id="chck2" />
              <label className="tab-label" htmlFor="chck2">
                ADAO Treasury - 77%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                The greater majority of $ADAO Governance tokens will be
                allocated to the treasury and governed by ADAO token holders.
              </div>
            </div>
            <div className="accordion__tab">
              <input type="checkbox" id="chck3" />
              <label className="tab-label" htmlFor="chck3">
                Groundwork Bounty Program - 18.4%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                This allocation will be minted into the treasury and is to be
                used for onboarding new members & partner projects and rewarding
                them for their contribution.
              </div>
            </div>
            <div className="accordion__tab">
              <input type="checkbox" id="chck4" />
              <label className="tab-label" htmlFor="chck4">
                Initial Core Contributors - 2.6%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                The amount allocated to “Initial Core Contributors” will be
                split evenly between the 13 core members who got ADAO where it
                is today.
              </div>
            </div>
            <div className="accordion__tab">
              <input type="checkbox" id="chck5" />
              <label className="tab-label" htmlFor="chck5">
                Blockchain-wide Airdrop - 1.5%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                This allocation will be distributed blockchain wide to
                decentralize power and interest in ADAO to the wider Cardano
                community.
              </div>
            </div>
            <div className="accordion__tab">
              <input type="checkbox" id="chck6" />
              <label className="tab-label" htmlFor="chck6">
                Active Community Member Airdrop - 0.5%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
              </label>
              <div className="tab-content">
                This allocation has been earmarked as a way to reward early
                interest in ADAO. It will be distributed equally to ADAO Discord
                members who were in the server before token mint.
              </div>
            </div>
          </div>
        </div>

        <div className="section__text">
          <img
            className="staking-graphic vr"
            src={tokendesign}
            alt="ADAO Staking Token"
          />
        </div>
      </div>
    </div>
  )
}
