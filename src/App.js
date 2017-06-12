import React, { Component } from 'react';
import './App.css';
import QuestionGrid from "./components/questionComponents/grid/QuestionGrid";

class App extends Component {
  render() {

      let questionsArr = [
          {
              question : "Hey, what's up?",
              points: 80,
              event: "event 1",
              id: "a"
          },
          {
              question : "Hey, who you are?",
              points: 100,
              event: "event 2",
              id: "b"
          }
      ];

      return (
      <div className="App">
            <QuestionGrid questionList={questionsArr} size={6}/>
      </div>
    );
  }
}

export default App;
