import React from "react"
import heroImage from "../images/cube.svg"

import "./hero.css"

const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <div className="overlay" />
        <img src={heroImage} alt="undraw spacesuit and rocket"></img>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">{props.display}</h1>
              <p className="lead mb-0">{props.lead}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
