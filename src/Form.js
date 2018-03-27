import React from 'react';
import './Form.css';

class Form extends React.Component {
	constructor(props) {
		super();
		this.state = {
			value: ''
		};
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.value) {
			this.props.addComment(this.state.value);
		}
		this.setState({value: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<p>Add your comment:</p>
				<textarea id='newComment' name='newComment' onChange={this.handleChange.bind(this)} value={this.state.value} />
				<input readOnly type='Submit' value='Submit' />
			</form>
		)
	}
}

export default Form;