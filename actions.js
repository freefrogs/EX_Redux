import uuid from uuid;

// type
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

// action creators
function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(id,text) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUp(id) {
	return {
		type: THUMB_UP,
		id
	}
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id
	}
}