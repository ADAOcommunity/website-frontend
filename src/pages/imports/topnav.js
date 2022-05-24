import React from "react"

import textlogo from "../../components/img/assets/ADAO-Logo-ADAO-White.svg"

export default function Topnav() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <a className="navbar-brand" href="https://www.theadao.io/">
          <img src={textlogo} className="logo" alt="ADAO Logo" />
        </a>

        <input type="checkbox" className="toggle" id="toggle" />

        <ul className="links">
          <li>
            <a title="Home" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              title="Roundtable Multi-Sig dApp"
              href="https://roundtable.theadao.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Roundtable Multi-Sig dApp
            </a>
          </li>
          <li>
            <a
              title="Medium"
              href="https://medium.com/@ADAOcommunity"
              rel="noopener noreferrer"
              target="_blank"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              title="GitHub"
              href="https://github.com/ADAOcommunity"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>

        <label
          htmlFor="toggle"
          aria-label="Open the menu"
          className="toggleLabel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            aria-hidden="true"
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </label>
      </div>
    </div>
  )
}
