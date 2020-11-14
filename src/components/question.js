import React from "react"

import Header from "./header";

export default function QuestionSelection({id, headerText, optionsArray, onClickHandler, next}) {

  const createChoiceButtons = () => {
    return optionsArray.map(
      (option, key) => 
      <button key={key} className="choiceButton" onClick={() => onClickHandler(id, option, next)}>{option}</button>)
  };

  const choices = createChoiceButtons();

  return (
    <div className="question">
      <Header headerText={headerText} />
        {choices}
        <br />
        <button onClick={() => onClickHandler(id, null, next)}>Skip</button>
    </div>
  )
}