import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {THUMB_UP} from './actions';
import {THUMB_DOWN} from './actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state.comments];
		}
		case REMOVE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.comments.map(comment => comment.id === action.id ?
				{...comment, text: action.text} : comment);
		case THUMB_UP: 
			return state.comments.map(comment => comment.id === action.id ?
				{...comment, votes: comment.votes + 1} : comment); 
		case THUMB_DOWN: 
			return state.comments.map(comment => comment.id === action.id ?
				{...comment, votes: comment.votes - 1} : comment);
		default:
			return state;
	}
}

export default comments;