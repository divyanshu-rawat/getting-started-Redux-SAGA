import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import createSagaMiddleware from 'redux-saga';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {provider} from 'react-redux';
import {logger} from 'redux-logger';
// import reducer from './reducers';
// import App from './components/App';
// import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//    reducer,
//    applyMiddleware(sagaMiddleware, logger),
// );

// sagaMiddleware.run(rootSaga);

// render(
//    <Provider store={store}>
//      <App />
//    </Provider>,
// document.getElementById('root'),
// );

ReactDOM.render(<App />, document.getElementById('root'));

