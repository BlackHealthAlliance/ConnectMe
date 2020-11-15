import React, { useState } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"

import { saveSearchValues } from "../state/app"

import { QuestionMulitple } from "../components/question"
import Banner from "../components/banner"

import {
  getCities,
  getLanguages,
  getServices,
  getPopulation,
  getCost,
} from "../utils/data"

function Search({ dispatch }) {
  const [questionAnswers, setQuestionAnswers] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState("city")

  const [cities, setCities] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [cost, setCost] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);
  const [population, setPopulation] = React.useState([]);

  React.useEffect(() => {
    getCities().then(response => setCities(response));
    getServices().then(response => setServices(response));
    getCost().then(response => setCost(response));
    getLanguages().then(response => setLanguages(response));
    getPopulation().then(response => setPopulation(response));
  }, []);

  const updateAnswers = (id, value) => {
    const updatedAnswers = questionAnswers
    updatedAnswers[id] = value
    setQuestionAnswers(updatedAnswers)
  }

  const onClickToNextQuestion = (id, value, nextId, skip) => {
    if (!skip) {
      updateAnswers(id, value)
    }
    setCurrentQuestion(nextId)
  }

  const onClickToResults = async (id, value, nextId, skip) => {
    if (!skip) {
      updateAnswers(id, value)
    }
    dispatch(saveSearchValues(Object.assign({}, questionAnswers)))
    navigate("/results/")
  }

  const getCurrentQuestion = () => {
    let questionComponent
    switch (currentQuestion) {
      case "city":
        questionComponent = (
          <QuestionMulitple
            id={currentQuestion}
            headerText="What area(s) are you looking for services in? (select all that apply)"
            optionsArray={cities}
            next="services"
            onClickHandler={onClickToNextQuestion}
          />
        )
        break
      case "services":
        questionComponent = (
          <QuestionMulitple
            id={currentQuestion}
            headerText="What type of service are you looking for?"
            optionsArray={services}
            next="cost"
            onClickHandler={onClickToNextQuestion}
          />
        )
        break
      case "cost":
        questionComponent = (
          <QuestionMulitple
            id={currentQuestion}
            headerText="What are your budgetary needs?"
            optionsArray={cost}
            next="languages"
            onClickHandler={onClickToNextQuestion}
          />
        )
        break
      case "languages":
        questionComponent = (
          <QuestionMulitple
            id={currentQuestion}
            headerText="What language would you prefer services to be offered in?"
            optionsArray={languages}
            next="population"
            onClickHandler={onClickToNextQuestion}
          />
        )
        break
      case "population":
        questionComponent = (
          <QuestionMulitple
            id={currentQuestion}
            headerText="Are you looking for resources that serve any of the following populations? (select all that apply)"
            optionsArray={population}
            onClickHandler={onClickToResults}
          />
        )
        break;
      default:
        questionComponent = null;

    }
    return questionComponent
  }

  return (
    <div className="questionWrapper">
      <center>{getCurrentQuestion()}</center>
      <Banner />
    </div>
  )
}

export default connect(
  state => ({ searchValues: state.app.searchValues }),
  null
)(Search)
