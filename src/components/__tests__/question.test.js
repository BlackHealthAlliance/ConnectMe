import React from "react";
import renderer from "react-test-renderer";
import Question from '../question';
describe('Question', () => {
  
  test('It should render a question', () => {

    const mockOnClick = jest.fn();
    const tree = renderer
      .create(<Question
        id="test"
        headerText="Test question?"
        optionsArray={["option1", "option2"]}
        next=""
        onClickHandler={mockOnClick}/>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });

});