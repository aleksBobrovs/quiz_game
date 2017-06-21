import React, { Component } from 'react';
import './QuestionFront.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

class QuestionFront extends Component {
    render() {
        const { question, points, event, id } = this.props.question;
        const { dispatch } = this.props;

        return (
            <div onClick={() => dispatch(actions.openQuestionAction({isAnyQuestionOpen: true, questionId: '21'}))}>
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

export default connect(
    (state) => {
        return {
            openQuestion: state.openQuestion
        }
    }
)(QuestionFront);