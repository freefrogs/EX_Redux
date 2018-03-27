import {connect} from 'react-redux';
import Form from './Form';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Form);