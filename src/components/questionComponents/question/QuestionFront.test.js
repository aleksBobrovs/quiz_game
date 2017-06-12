import React from 'react';
import { mount } from 'enzyme';
import QuestionFront from './QuestionFront';

describe("QuestionFront tests", () => {
   let props;
   let mountedQuestionFront;
   const questionFront = () => {
       if (!mountedQuestionFront) {
           mountedQuestionFront = mount(<QuestionFront {...props}/>);
           return mountedQuestionFront;
       }
   }

   beforeEach(() => {
       props = {
           question: {
               question: undefined,
               points: undefined,
               event: undefined
           }
       };
       mountedQuestionFront = undefined;
   });

   it("always renders a div", () => {
      const divs = questionFront().find("div");
      expect(divs.length).toBeGreaterThan(0);
   });
});