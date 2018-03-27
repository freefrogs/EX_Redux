import uuid from 'uuid';

// type
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

// action creators
export const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

export const editComment = (text,id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

export const removeComment = (id) => {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

export const thumbUp = id => {
	return {
		type: THUMB_UP,
		id
	}
}

export const thumbDown = id => {
	return {
		type: THUMB_DOWN,
		id
	}
}
