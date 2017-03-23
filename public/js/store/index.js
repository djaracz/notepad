import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import reduxLogger from 'redux-logger';
// import ReduxPromise from 'redux-promise';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ thunk, reduxLogger() ];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store;