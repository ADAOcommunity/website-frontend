import React from "react"

import intro from "../../components/img/branding/Brand-Identity-Guide-1-1100x850.png"
import logos from "../../components/img/branding/Brand-Identity-Guide-3-1100x850.png"
import brandcolors from "../../components/img/branding/Brand-Identity-Guide-4-1100x850.png"
import typography from "../../components/img/branding/Brand-Identity-Guide-5-1100x850.png"
import final from "../../components/img/branding/DT-1100x850.png"
import mantra from "../../components/img/branding/DT1-1100x850.png"

export default function Branding() {
  return <div className="section section__color">
    <div className="section__wide">
      <div data-aos="fade-left">
        <div className="flipbox">
          <div className="flipbox__front">
            <h3>Brand Identity Guide</h3>
          </div>

          <div className="flipbox__back">
            <h3>2022 Brand Identity Guide</h3>
            <p>May 13th, 2022 &mdash; ADAO Governance Token holders voted to approve and adopt the updated Brand Guidelines for 2022.</p>
          </div>
        </div>
      </div>

      <img src={intro} alt="Brand identity guide." className="vr" />
      <img src={mantra} alt="Our mantra: decentralization together." className="vr" />
      <img src={logos} alt="Display of logos and their color variants." className="vr" />
      <img src={brandcolors} alt="Display of brand colors and their hex colors." className="vr" />
      <img src={typography} alt="Display of brand typography." className="vr" />
      <img src={final} alt="" className="vr" />

      <div data-aos="fade-right">
        <div className="flipbox vr">
          <div className="flipbox__front">
            <h3>ADAO Brand Assets</h3>
          </div>

          <div className="flipbox__back">
            <h3>Download Brand Assets</h3>
            <p>Download assets here: <a download href="/ADAO-Brand-Assets-2022.zip">ADAO Brand Assets &mdash; 2022</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
}