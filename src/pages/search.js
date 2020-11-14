import React, { useState } from "react"

import Question, { QuestionDropdown, QuestionCheckbox } from "../components/question";

import { searchOrganizations } from "../utils/functions";

function Search() {

  const [questionAnswers, setQuestionAnswers] = useState(new Array(3));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const updateAnswers = (id, value) => {
    const updatedAnswers = questionAnswers;
    updatedAnswers[id] = value;
    setQuestionAnswers(updatedAnswers);
  }

  const onClickToNextQuestion = (id, value, nextId) => {
    updateAnswers(id, value);
    setCurrentQuestion(nextId);
  };

  const onClickToResults = (id, value) => {
    updateAnswers(id, value);
    searchOrganizations({
      servicesOffered: questionAnswers[0]
    })
    console.log(questionAnswers);
  }

  const getCurrentQuestion = () => {
    let questionComponent;
    switch(currentQuestion) {
      case 0:
      default:
        questionComponent = (<Question
          id={0}
          headerText="What type of service are you looking for?"
          optionsArray={[
            "Crisis Support",
            "Individual Counselling",
            "Peer Counselling"
          ]}
          next={1}
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case 1:
        questionComponent = (<Question
          id={1}
          headerText="Which type of resource would you prefer?"
          optionsArray={[
            "Free",
            "Paid",
            "Covered by OHIP",
            "Accepts Insurance"
          ]}
          next={2}
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case 2:
        questionComponent = (<Question
          id={2}
          headerText="How would you like services to be offered?"
          optionsArray={[
            "In Person",
            "Online/Virtually",
            "Both"
          ]}
          next={0}
          onClickHandler={onClickToResults}/>);
        break;
    }
    return questionComponent;
  }

  return (
    <div className="questionWrapper">
      <center>
        { getCurrentQuestion() }
      </center>
    </div>
  )
}

export default Search;