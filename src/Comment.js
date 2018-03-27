import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUp, thumbDown, removeComment}) =>
	<li>
		<p>{text}</p>
		<span>votes: {votes}</span>
		<button onClick={() => thumbUp(id)}><i className='fa fa-thumbs-o-up'></i></button>
		<button onClick={() => thumbDown(id)}><i className='fa fa-thumbs-o-down'></i></button>
		<button onClick={() => removeComment(id)}><i className='fa fa-trash-o'></i></button>
	</li>;

export default Comment;