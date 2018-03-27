import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import FormContainer from './FormContainer'

const App = () => {
	return (
		<div className='App'>
			<h1>Leave your comment</h1>
			<CommentsListContainer />
			<FormContainer />
		</div>
	);
};

export default App;
