import React, { button } from "react"

import Header from "../components/header";

import { searchFunction } from "../utils/functions";

function About() {

  const questions = [
    "Where are you located?",
    "Which type of resource would you prefer?"
  ];

  const onClickHandler = (value) => {
    searchFunction(value);
  };

  return (
    <div>
      <div className="question">
        <Header headerText="Where are you located?" />
        <label for="postal-code">Postal Code</label> <br/>
        <input id="postal-code"/>
        <br />
        <label for="city">City</label> <br/>
        <input id="city"/>
        <br />
        <label for="province">Province</label> <br/>
        <input id="province"/>
        <br />
        <button className="choiceButton">Next</button>
      </div>
      <div className="question">
        <Header headerText="What type of service are you looking for?" />
        <button className="choiceButton" onClick={() => onClickHandler("Crisis Support")}>Crisis Support</button>
        <button className="choiceButton">Individual Counselling</button>
        <button className="choiceButton">Peer Counselling</button>
        <br />
        <a href="/">Skip</a>
      </div>
      <div className="question">
        <Header headerText="Which type of resource would you prefer?" />
        <button className="choiceButton" onClick={() => onClickHandler("Free")}>Free</button>
        <button className="choiceButton">Paid</button>
        <button className="choiceButton">Covered by OHIP</button>
        <button className="choiceButton">Accepts Insurance</button>
        <br />
        <a href="/">Skip</a>
      </div>

    </div>
  )
}

export default About;