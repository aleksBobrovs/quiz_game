import React, { Component } from 'react';
import './QuestionFront.css';
import PropTypes from 'prop-types';

class QuestionFront extends Component {
    render() {
        const { question, points, event } = this.props.question;

        return (
            <div>
                <div>
                    Points : {points}
                </div>
                <div>
                    Event : {event}
                </div>
                <div>
                    Question : {question}
                </div>
            </div>
        );
    }
}

QuestionFront.propTypes = {
    question: PropTypes.object
};

export default QuestionFront;