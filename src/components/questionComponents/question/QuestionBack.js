import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

class QuestionBack extends Component {
    render() {
        const { question, points, event, id } = this.props.question;
        const { dispatch } = this.props;

        return (
            <div onClick={() => dispatch(actions.openQuestionAction({isAnyQuestionOpen: true, questionId: '21'}))}>
                QUESTION BACK
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            openQuestion: state.openQuestion
        }
    }
)(QuestionBack);