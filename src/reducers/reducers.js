import * as types from '../actionTypes';
import * as defaultState from './defaultStates';

export const openQuestionReducer = (state = defaultState.openQuestion, action) => {
    switch(action.type) {
        case types.OPEN_QUESTION_ACTION:
            return {
                ...defaultState.openQuestion,
                ...action.openQuestion
            }
        default:
            return state;
    }
};
