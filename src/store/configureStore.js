import thunk from 'redux-thunk';
import * as reducers from '../reducers/reducers';
import * as redux from 'redux';

export let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        openQuestion: reducers.openQuestionReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
