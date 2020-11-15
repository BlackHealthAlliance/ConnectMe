import React from "react";

import { navigate } from "gatsby";
import Banner from "../components/banner";

export default function Entry() {

  const onClick = (url) => {
    navigate(url);
  };

  return (
    <center>
      <Banner />
      <button className="choiceButton" onClick={() => onClick("/search/")} >Help me find resources.</button>
      <br />
      <button className="choiceButton" onClick={() => onClick("/results/")}>Show me everything.</button>
    </center>
  )
}