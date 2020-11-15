
import React from "react"

import PTCLogo from "../assets/PTC-Logo-4.png";

export default function Banner(props) {
  return (
  <div className="banner footer">
    <img className="logo" src={PTCLogo} alt="Pathways to Care"/>
  </div>
  );
}