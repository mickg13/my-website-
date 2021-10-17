import React from "react"
import "./nav.css"
import "./protfolio.css"
import "bootstrap/dist/css/bootstrap.min.css"


const NavBar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><h3 style={{ color: "tomato", marginTop: "0.625rem" }}>GOANAR</h3></a>
          <button className="navbar-toggler backgroundIcon" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-lg-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login" >login</a>
              </li>
           
            </ul>

          </div>
        </div>
      </nav>
      {/* <div classNameName="landing-text">
        <h1>I,am Goanar Abraham</h1>
        <h6 style={{ marginLeft: "19rem" }}> Web desginer and Web Deveoloper</h6>
      </div> */}

    </div>
  )
}

export default NavBar
