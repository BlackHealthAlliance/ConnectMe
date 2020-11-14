import React, { useState } from "react"

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
        <button className="skipButton" onClick={() => onClickHandler(id, null, next)}>Skip</button>
    </div>
  )
}

export function QuestionDropdown({id, headerText, optionsArray, onClickHandler, next}) {

  const createOptions = () => {
    return optionsArray.map(
      (option, key) => 
      <option key={key}>{option}</option>)
  };

  const options = createOptions();

  return (
    <div className="question">
      <Header headerText={headerText} />
      <select className="choiceDropdown">
        { options }
      </select>
      <button className="selectButton" onClick={() => onClickHandler(id, null, next)}>Select</button>
      <br />
      <button className="skipButton" onClick={() => onClickHandler(id, null, next)}>Skip</button>
    </div>
  )
}

export function QuestionCheckbox({id, headerText, optionsArray, onClickHandler, next}) {

  const [isChecked, setIsChecked] = useState(Array.apply(Array(optionsArray.length)));

  const handleInputChange = (id) => {
    console.log(id);
    const newCheckedValues = isChecked;
    newCheckedValues[id] = !newCheckedValues[id];
    setIsChecked(newCheckedValues);
  }

  const createOptions = () => {
    return optionsArray.map(
      (option, key) => (
        <div key={key} className="checkbox">
          <input
            id={option}
            key={key}
            name={option}
            value={option}
            type="checkbox"
            checked={isChecked[key]}
            onChange={() => handleInputChange(key)} />
          <label htnlfor={option}>{option}</label>
        </div>
      )
    )
  };

  const options = createOptions();

  const getValues = () => {
    const searchValues = [];
    optionsArray.forEach((option, key) => {
      if (isChecked[key]) {
        searchValues.push(option)
      }
    });
    return searchValues;
  }

  return (
    <div className="question">
      <Header headerText={headerText} />
      { options }
      <button className="selectButton" onClick={() => onClickHandler(id, getValues(), next)}>Select</button>
      <br />
      <button className="skipButton" onClick={() => onClickHandler(id, null, next)}>Skip</button>
    </div>
  )
}