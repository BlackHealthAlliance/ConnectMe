import React, { useState } from "react"
import { navigate } from 'gatsby';
import { connect } from "react-redux"

import { saveSearchValues } from '../state/app';

import Question, { QuestionMulitple } from "../components/question";
import Banner from "../components/banner";

import { searchOrganizations } from "../utils/functions";
import {
  getCities,
  getLanguages,
  getInsurance,
  getServices,
  getPopulation,
  getCost,
  getLengthOfService } from "../utils/data"

function Search({ dispatch }) {
  
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState("city");

  const updateAnswers = (id, value) => {
    const updatedAnswers = questionAnswers;
    updatedAnswers[id] = value;
    setQuestionAnswers(updatedAnswers);
  }

  const onClickToNextQuestion = (id, value, nextId, skip ) => {
    if (!skip) updateAnswers(id, value);
    setCurrentQuestion(nextId);
  };

  const onClickToResults = async (id, value) => {
    updateAnswers(id, value);
    console.log(questionAnswers)
    const results = searchOrganizations(questionAnswers);
    dispatch(saveSearchValues(Object.assign({}, results)));
    navigate('/results/');
  }

  const getCurrentQuestion = () => {
    let questionComponent;
    switch(currentQuestion) {
      case "city":
      default:
        questionComponent = (<QuestionMulitple
          id={currentQuestion}
          headerText="What area(s) are you looking for services in? (select all that apply)"
          optionsArray={getCities()}
          next="services"
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case "services":
        questionComponent = (<QuestionMulitple
          id={currentQuestion}
          headerText="What type of service are you looking for?"
          optionsArray={getServices()}
          next="cost"
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case "cost":
        questionComponent = (<QuestionMulitple
          id={currentQuestion}
          headerText="What are your budgetary needs?"
          optionsArray={getCost()}
          next="languages"
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case "languages":
        questionComponent = (<QuestionMulitple
          id={currentQuestion}
          headerText="What language would you prefer services to be offered in?"
          optionsArray={getLanguages()}
          next="population"
          onClickHandler={onClickToNextQuestion}/>);
        break;
      case "population":
        questionComponent = (<QuestionMulitple
          id={currentQuestion}
          headerText="Are you looking for resources that serve any of the following populations? (select all that apply)"
          optionsArray={getPopulation()}
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
      <Banner />
    </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Search);