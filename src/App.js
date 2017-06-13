import React, { Component } from 'react';
import './App.css';
import QuestionGrid from "./components/questionComponents/grid/QuestionGrid";
import * as Mock from "./mockdata/mockQuestionList";

class App extends Component {
  render() {

      let questionsArr = Mock.mockQuestionList;

      return (
      <div className="App">
            <QuestionGrid questionList={questionsArr} size={8}/>
      </div>
    );
  }
}

export default App;
