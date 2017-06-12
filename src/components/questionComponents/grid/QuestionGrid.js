import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';
import QuestionFront from '../question/QuestionFront';

class QuestionGrid extends Component {

    printQuestions(questionList) {
        return questionList.map((q) => (
            <div key={q.id}><QuestionFront question={q}/></div>));
    }

    render() {
        let { questionList, size } = this.props;

        const layout = [
            {i: "a", x: 2, y: 0, w: 1, h: 1, static: true},
            {i: "b", x: 1, y: 1, w: 1, h: 1, static: true}
        ]

        return (
            <ReactGridLayout className="layout" cols={size} rowHeight={100} width={800}>
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