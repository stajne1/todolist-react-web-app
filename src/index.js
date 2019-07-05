import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createSagaMiddleWare } from 'redux-saga';
import Reducer from './reducer';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
