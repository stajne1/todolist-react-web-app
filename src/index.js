import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import Reducer from './reducer';

const store = createStore(Reducer);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
