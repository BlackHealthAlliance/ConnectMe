import React from "react";

import { navigate } from "gatsby";

import PTCLogo from "../assets/PTC-Logo-4.png";

export default function Entry() {

  const onClick = (url) => {
    navigate(url);
  };

  return (
    <center>
      <img src={PTCLogo} alt="Pathways to Care" className="logo-header" />
      <br />
      <h4>Looking for safe and culturally competent care for yourself or a loved one? <br />
        ConnectMe links Black children and youth to nearby mental health services.</h4>
      <br />
      <button className="choiceButton" onClick={() => onClick("/search/")} >Help me find resources.</button>
      <br />
      <button className="choiceButton" onClick={() => onClick("/results/")}>Show me everything.</button>
    </center>
  )
}