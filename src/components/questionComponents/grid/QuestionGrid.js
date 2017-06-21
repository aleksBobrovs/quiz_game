import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';
import QuestionFront from '../question/QuestionFront';
import QuestionBack from '../question/QuestionBack';
import * as Mock from '../../../mockdata/mocklayout';
import './QuetionGrid.css';

class QuestionGrid extends Component {

    printQuestions(questionList) {
        return questionList.map((q) => (
            <div className="question-back" key={q.id}><QuestionBack question={q}/></div>));
    }

    render() {
        let { questionList, size } = this.props;

        const layout = Mock.mockLayout;

        return (
            <ReactGridLayout className="layout" layout={layout}
                             cols={size} rowHeight={120} width={1800}>
                { this.printQuestions(questionList) }
            </ReactGridLayout>
        );
    }
}

QuestionGrid.propTypes = {
    questionList: PropTypes.array,
    size: PropTypes.number
};

export default QuestionGrid;