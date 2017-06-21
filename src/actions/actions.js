import * as types from '../actionTypes';

export const openQuestionAction = (openQuestion) => {
    console.log("test");
    return {
        type: types.OPEN_QUESTION_ACTION,
        openQuestion
    };
};
