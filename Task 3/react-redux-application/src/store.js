import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import postReducer from './reducers/reducers';

const rootReducer = combineReducers({
    posts: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
