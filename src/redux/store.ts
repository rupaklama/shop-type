import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// redux dev tool library
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

// saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// STORE is the collections of different Reducers to create global state object.
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// NOTE: After applyMiddleware gets called, we are going to run & add in all our Sagas
// sagaMiddleware.run(startRootSaga);// to run our root saga
