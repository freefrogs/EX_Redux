import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import {addComment} from './actions';
import './index.css';
import DevTools from './DevTools';

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('First comment'));