import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './PostsReducer';
import { userReducer } from './UserReducer';

const initialState = { userReducer:{name : localStorage.getItem('name'), email : localStorage.getItem('email'), auth: localStorage.getItem('token')}};

const reducers = combineReducers({
    postReducer,
    userReducer,
});

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const middlewares = [loggerMiddleware, thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, initialState, composeEnhancers);

export default store;