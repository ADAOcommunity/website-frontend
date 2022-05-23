import React from "react"

export default function Members() {
  return <div className="section section__image" id="counting">
    <div className="section__text text-center">
      <div className="counters">
        <div className="counter">
          <h1 id="members"><div className="skeleton"></div></h1>
          <p>Discord Members</p>
        </div>
        <div className="counter">
          <h1 id="supporters"><div className="skeleton"></div></h1>
          <p>ADAO Supporters</p>
        </div>
        <div className="counter">
          <h1 id="builders"><div className="skeleton"></div></h1>
          <p>ADAO Builders</p>
        </div>
        <div className="counter">
          <h1 id="core"><div className="skeleton"></div></h1>
          <p>ADAO Core Contributors</p>
        </div>
      </div>
    </div>
  </div>;
}