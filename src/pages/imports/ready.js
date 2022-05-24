import React from "react"

export default function Ready() {
  return (
    <div className="section">
      <div className="section__text">
        <h1>Ready to dive into decentralization?</h1>
        <p>
          Join our growing, active Discord community and take part in the
          conversation there. Connect with ADAO members, ask questions, attend
          meetings, and find out how you can get involved.
          #DecentralizationTogether
        </p>
        <a href="https://discord.gg/gNuF8npW9H" className="btn vr" data-aos="fade-up" data-aos-delay="300">
          Join Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="join">
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
