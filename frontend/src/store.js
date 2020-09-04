import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { articleListReducer } from "./Reducers/articleReducers";
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    articleList: articleListReducer,
});

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;